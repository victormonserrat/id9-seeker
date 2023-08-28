import Film from '../models/film'

type Films = Readonly<{
  all: () => Promise<Film[]>
  withSearchTerm: (search: string) => Promise<Film[]>
  withSlug: (slug: string) => Promise<Film>
}>

export default Films
