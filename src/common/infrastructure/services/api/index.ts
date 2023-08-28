import fetcher from '../http/fetcher'
import {
  API_FILMS,
  API_PEOPLE,
  API_PLANETS,
  API_SPECIES,
  API_STARSHIPS,
  API_VEHICLES,
  withSearch,
} from './endpoints'

export const getFilms = (search?: string) =>
  fetcher(withSearch(API_FILMS)(search))
export const getPeople = (search?: string) =>
  fetcher(withSearch(API_PEOPLE)(search))
export const getPlanets = (search?: string) =>
  fetcher(withSearch(API_PLANETS)(search))
export const getSpecies = (search?: string) =>
  fetcher(withSearch(API_SPECIES)(search))
export const getStarships = (search?: string) =>
  fetcher(withSearch(API_STARSHIPS)(search))
export const getVehicles = (search?: string) =>
  fetcher(withSearch(API_VEHICLES)(search))
