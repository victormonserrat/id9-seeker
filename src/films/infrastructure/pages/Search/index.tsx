import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Search from '~/common/infrastructure/components/Search'
import FilmCard from '~/films/infrastructure/components/Card'

import { useFilmSearch } from './hooks'
import { Anchor, Container } from './styles'
import { FilmSearchProps } from './types'

const FilmSearch = ({ films }: FilmSearchProps) => {
  const { handleSearchChange } = useFilmSearch()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>ID9 seeker</title>
        <meta name="description" content="Star Wars films search engine" />
      </Head>
      <Container>
        <Search
          value={router.query.search?.toString()}
          onChange={handleSearchChange}
          placeholder="Search films by title, characters or planets"
        />
        {films.map((props) => (
          <Link href={props.href} key={props.id}>
            <Anchor>
              <FilmCard {...props} />
            </Anchor>
          </Link>
        ))}
      </Container>
    </>
  )
}

export default FilmSearch
