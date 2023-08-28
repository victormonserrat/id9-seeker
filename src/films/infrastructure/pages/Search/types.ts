import { FilmCardProps } from '~/films/infrastructure/components/Card'

export type FilmSearchProps = Readonly<{
  films: (FilmCardProps & { href: string; id: string })[]
}>
