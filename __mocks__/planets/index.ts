import planet1 from './1'

const planets = (search?: string) => {
  switch (search) {
    case 'tatooine':
      return [planet1]
    default:
      return []
  }
}

export default planets
