import ValueObject from '~/common/domain/valueObject'

import InvalidProducer from '../exceptions/invalidProducer'

type FilmProducer = Readonly<ValueObject<string>>

const fromString = (value: string): FilmProducer => {
  if (!value.trim()) throw InvalidProducer.causeIsBlank()

  return ValueObject.fromValue(value)
}

const FilmProducer = { fromString } as const

export default FilmProducer
