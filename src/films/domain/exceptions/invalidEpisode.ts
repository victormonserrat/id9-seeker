type InvalidFilmEpisode = Readonly<Error & { name: 'InvalidFilmEpisode' }>

const causeIsNotPositive = (): InvalidFilmEpisode => ({
  message: 'Film episode has to be positive',
  name: 'InvalidFilmEpisode',
})

const InvalidFilmEpisode = { causeIsNotPositive } as const

export default InvalidFilmEpisode
