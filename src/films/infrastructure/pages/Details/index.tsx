import Head from 'next/head'
import { useRouter } from 'next/router'
import Highlighter from 'react-highlight-words'

import { FilmDetailsProps } from './types'

const FilmDetails = (props: FilmDetailsProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{`ID9 seeker | ${props.title}`}</title>
        <meta
          name="description"
          content={`Star Wars: Episode ${props.episode} - ${props.title}`}
        />
      </Head>
      <button onClick={router.back}>Back to result</button>
      <div>
        <h3>
          <Highlighter
            searchWords={router.query.search?.toString().split(' ') ?? []}
            textToHighlight={`Episode ${props.episode} - ${props.title}`}
          />
        </h3>
        <p>{`Director: ${props.director}`}</p>
        <p>{`Producer: ${props.producer}`}</p>
        <p>{props.release}</p>
      </div>
    </>
  )
}

export default FilmDetails
