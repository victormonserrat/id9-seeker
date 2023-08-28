import Exception from '~/common/domain/exception'

type NotFoundFilm = Readonly<Exception & { name: 'NotFoundFilm' }>

const withSlug = (slug: string): NotFoundFilm => ({
  message: `Film with "${slug}" slug can not be found`,
  name: 'NotFoundFilm',
})

const NotFoundFilm = { withSlug } as const

export default NotFoundFilm
