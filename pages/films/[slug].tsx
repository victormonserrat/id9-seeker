import slugify from 'lib/slugify'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import FilmDetails from '~/films/infrastructure/pages/Details'
import { FilmDetailsProps } from '~/films/infrastructure/pages/Details/types'
import ApiFilms from '~/films/infrastructure/services/apiFilms'

const FilmsId: NextPage<FilmDetailsProps> = (props) => (
  <FilmDetails {...props} />
)

export const getStaticProps: GetStaticProps<FilmDetailsProps> = async (
  context,
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const film = await ApiFilms.withSlug(context.params!.slug!.toString())

  return {
    props: {
      director: film.director.value(),
      episode: film.episode.toRomanNumeral(),
      producer: film.producer.value(),
      release: film.release.format(),
      title: film.title.value(),
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const films = await ApiFilms.all()

  return {
    fallback: false,
    paths: films.map((value) => ({
      params: { slug: slugify(value.title.value()) },
    })),
  }
}

export default FilmsId
