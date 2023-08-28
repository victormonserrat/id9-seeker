import Entity from '~/common/domain/entity'

import CoverUrl from './coverUrl'
import Crawl from './crawl'
import Director from './director'
import Episode from './episode'
import Producer from './producer'
import Release from './release'
import Title from './title'

type Film = Readonly<
  Entity & {
    coverUrl: CoverUrl
    crawl: Crawl
    director: Director
    episode: Episode
    producer: Producer
    release: Release
    title: Title
  }
>

export default Film
