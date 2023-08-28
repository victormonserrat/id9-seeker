import ValueObject from '~/common/domain/valueObject'

import InvalidDirector from '../exceptions/invalidDirector'

type FilmDirector = Readonly<ValueObject<string>>

const fromString = (value: string): FilmDirector => {
  if (!value.trim()) throw InvalidDirector.causeIsBlank()

  return ValueObject.fromValue(value)
}

const FilmDirector = { fromString } as const

export default FilmDirector
