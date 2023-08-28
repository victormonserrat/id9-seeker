import fetcher from '../services/http/fetcher'

const config = {
  fetcher: fetcher,
  revalidateOnFocus: false,
} as const

export default config
