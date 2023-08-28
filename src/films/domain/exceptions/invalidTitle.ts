import Exception from '~/common/domain/exception'

type InvalidFilmTitle = Readonly<Exception & { name: 'InvalidFilmTitle' }>

const causeIsBlank = (): InvalidFilmTitle => ({
  message: 'Film title can not be blank',
  name: 'InvalidFilmTitle',
})

const InvalidFilmTitle = { causeIsBlank } as const

export default InvalidFilmTitle
