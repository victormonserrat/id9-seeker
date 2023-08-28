import person1 from './1'

const people = (search?: string) => {
  switch (search) {
    case 'luke':
      return [person1]
    default:
      return []
  }
}

export default people
