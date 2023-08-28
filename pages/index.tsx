import slugify from 'lib/slugify'
import { GetServerSideProps, NextPage } from 'next'

import FilmSearch from '~/films/infrastructure/pages/Search'
import { FilmSearchProps } from '~/films/infrastructure/pages/Search/types'
import ApiFilms from '~/films/infrastructure/services/apiFilms'

const Index: NextPage<FilmSearchProps> = (props) => <FilmSearch {...props} />

export const getServerSideProps: GetServerSideProps<FilmSearchProps> = async (
  context,
) => {
  context.res.setHeader('Cache-Control', 'public, max-age=604800, immutable')

  const films =
    context.query.search === undefined
      ? []
      : await ApiFilms.withSearchTerm(context.query.search.toString())

  return {
    props: {
      films: films.map((value) => ({
        body: value.crawl.value().replace(/\r\n/g, ' '),
        coverUrl: value.coverUrl.value(),
        episode: value.episode.toRomanNumeral(),
        href: `/films/${slugify(
          value.title.value(),
        )}?search=${context.query.search?.toString()}`,
        id: value.id.value(),
        release: value.release.format(),
        title: value.title.value(),
      })),
    },
  }
}

export default Index
