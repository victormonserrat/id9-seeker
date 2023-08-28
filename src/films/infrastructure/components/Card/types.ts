import { HTMLAttributes } from 'react'

export type FilmCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  body?: string
  coverUrl: string
  episode: string
  release: string
  title: string
}

export type UseFilmCardProps = {
  release: FilmCardProps['release']
}
