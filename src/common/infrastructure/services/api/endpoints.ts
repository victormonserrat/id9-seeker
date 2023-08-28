export const API_FILMS = `${process.env.NEXT_PUBLIC_API_URL}/films`
export const API_PEOPLE = `${process.env.NEXT_PUBLIC_API_URL}/people`
export const API_PLANETS = `${process.env.NEXT_PUBLIC_API_URL}/planets`
export const API_SPECIES = `${process.env.NEXT_PUBLIC_API_URL}/species`
export const API_STARSHIPS = `${process.env.NEXT_PUBLIC_API_URL}/starships`
export const API_VEHICLES = `${process.env.NEXT_PUBLIC_API_URL}/vehicles`

export const withSearch = (endpoint: string) => (search?: string) =>
  `${endpoint}${search ? `?search=${search}` : ''}`
