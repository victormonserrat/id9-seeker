import ValueObject from '~/common/domain/valueObject'

import InvalidCrawl from '../exceptions/invalidCrawl'

type FilmCrawl = Readonly<ValueObject<string>>

const fromString = (value: string): FilmCrawl => {
  if (!value.trim()) throw InvalidCrawl.causeIsBlank()

  return ValueObject.fromValue(value)
}

const FilmCrawl = { fromString } as const

export default FilmCrawl
