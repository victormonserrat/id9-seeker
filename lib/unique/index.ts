const unique = <T>(items: T[]) =>
  items.filter(
    (value: T, index: number, array: T[]) => array.indexOf(value) === index,
  )

export default unique
