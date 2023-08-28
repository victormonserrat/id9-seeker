import ValueObject from '~/common/domain/valueObject'

import InvalidTitle from '../exceptions/invalidTitle'

type FilmTitle = Readonly<ValueObject<string>>

const fromString = (value: string): FilmTitle => {
  if (!value.trim()) throw InvalidTitle.causeIsBlank()

  return ValueObject.fromValue(value)
}

const FilmTitle = { fromString } as const

export default FilmTitle
