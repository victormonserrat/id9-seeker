type ValueObject<T> = Readonly<{ value: () => T }>

const fromValue = <T extends string | number | boolean | Date>(
  value: T,
): ValueObject<T> => ({
  value: () => value,
})

const ValueObject = { fromValue } as const

export default ValueObject
