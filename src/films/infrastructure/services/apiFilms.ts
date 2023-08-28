import slugify from 'lib/slugify'
import unique from 'lib/unique'

import {
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
} from '~/common/infrastructure/services/api'
import fetcher from '~/common/infrastructure/services/http/fetcher'
import NotFoundFilm from '~/films/domain/exceptions/notFoundFilm'
import Films from '~/films/domain/services/films'

import Film from '../models/film'
import FilmDto from '../models/filmDto'

const ApiFilms: Films = {
  all: async () => {
    const response: { results: FilmDto[] } = await getFilms()

    return response.results.map((value) => Film.fromDto(value))
  },
  withSearchTerm: async (search: string): Promise<Film[]> => {
    const searchTerms = unique(search.split(' '))

    const responses = await Promise.all([
      ...searchTerms.map((value) => getFilms(value)),
      ...searchTerms.map((value) => getPeople(value)),
      ...searchTerms.map((value) => getPlanets(value)),
      ...searchTerms.map((value) => getSpecies(value)),
      ...searchTerms.map((value) => getStarships(value)),
      ...searchTerms.map((value) => getVehicles(value)),
    ])

    const filmResponses: { results: FilmDto[] }[] = responses.slice(
      0,
      searchTerms.length,
    )
    const restResponses: { results: { films: string[] }[] }[] = responses.slice(
      searchTerms.length,
    )

    const filmResponseFilms = filmResponses.flatMap((value) =>
      value.results.map((item) => item.url),
    )
    const restResponseFilms = restResponses.flatMap((value) =>
      unique(value.results.flatMap((item) => item.films)),
    )

    const responseFilms = [...filmResponseFilms, ...restResponseFilms]
    const films = unique(
      responseFilms.filter(
        (value) =>
          responseFilms.filter((item) => item === value).length >=
          searchTerms.length,
      ),
    )

    const fetchedFilms = films.filter((value) =>
      filmResponseFilms.includes(value),
    )
    const unfetchedFilms = films.filter(
      (value) => !fetchedFilms.includes(value),
    )

    const unfetchedFilmResponses: FilmDto[] = await Promise.all(
      unfetchedFilms.map((value) => fetcher(value)),
    )

    const filmResponseResults = filmResponses.flatMap((value) => value.results)

    const fetched = fetchedFilms.map(
      (value) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        filmResponseResults.find((item) => item.url === value)!,
    )

    return [
      ...unfetchedFilmResponses.map((value) => Film.fromDto(value)),
      ...fetched.map((value) => Film.fromDto(value)),
    ]
  },
  withSlug: async (slug: string) => {
    const response: { results: FilmDto[] } = await getFilms()
    const film = response.results.find((value) => slugify(value.title) === slug)

    if (!film) throw NotFoundFilm.withSlug(slug)

    return Film.fromDto(film)
  },
}

export default ApiFilms
