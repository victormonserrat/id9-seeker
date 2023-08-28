import romanNumeral from 'lib/romanNumeral'

import ValueObject from '~/common/domain/valueObject'

import InvalidEpisode from '../exceptions/invalidEpisode'

type FilmEpisode = Readonly<
  ValueObject<number> & { toRomanNumeral: () => string }
>

const fromNumber = (value: number): FilmEpisode => {
  if (value < 1) throw InvalidEpisode.causeIsNotPositive()

  return {
    ...ValueObject.fromValue(value),
    toRomanNumeral: () => romanNumeral(value),
  }
}

const FilmEpisode = { fromNumber } as const

export default FilmEpisode
