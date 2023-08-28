import ValueObject from '../valueObject'

type Id = Readonly<ValueObject<string>>

const fromString = (value: string): Id => ValueObject.fromValue(value)

const Id = { fromString } as const

export default Id
