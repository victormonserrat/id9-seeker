import Exception from '~/common/domain/exception'

type InvalidFilmCrawl = Readonly<Exception & { name: 'InvalidFilmCrawl' }>

const causeIsBlank = (): InvalidFilmCrawl => ({
  message: 'Film crawl can not be blank',
  name: 'InvalidFilmCrawl',
})

const InvalidFilmCrawl = { causeIsBlank } as const

export default InvalidFilmCrawl
