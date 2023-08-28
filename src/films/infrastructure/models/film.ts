import Id from '~/common/domain/models/id'
import CoverUrl from '~/films/domain/models/coverUrl'
import Crawl from '~/films/domain/models/crawl'
import Director from '~/films/domain/models/director'
import Episode from '~/films/domain/models/episode'
import DomainFilm from '~/films/domain/models/film'
import Producer from '~/films/domain/models/producer'
import Release from '~/films/domain/models/release'
import Title from '~/films/domain/models/title'

import FilmDto from './filmDto'

type Film = Readonly<DomainFilm>

const Film = {
  fromDto: (dto: FilmDto): Film => ({
    coverUrl: CoverUrl.fromEpisodeNumber(dto.episode_id),
    crawl: Crawl.fromString(dto.opening_crawl),
    director: Director.fromString(dto.director),
    episode: Episode.fromNumber(dto.episode_id),
    id: Id.fromString(dto.episode_id.toString()),
    producer: Producer.fromString(dto.producer),
    release: Release.fromString(dto.release_date),
    title: Title.fromString(dto.title),
  }),
} as const

export default Film
