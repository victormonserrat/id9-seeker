import { rest } from 'msw'
import { setupServer } from 'msw/node'

import {
  API_FILMS,
  API_PEOPLE,
  API_PLANETS,
  API_SPECIES,
  API_STARSHIPS,
  API_VEHICLES,
} from '~/common/infrastructure/services/api/endpoints'

import film1 from './films/1'
import film2 from './films/2'
import film3 from './films/3'
import film6 from './films/6'
import people from './people'
import planets from './planets'

const server = setupServer(
  rest.get(API_FILMS, (req, res, ctx) => res(ctx.json({ results: [] }))),
  rest.get(API_PEOPLE, (req, res, ctx) =>
    res(
      ctx.json({
        results: people(req.url.searchParams.get('search') ?? undefined),
      }),
    ),
  ),
  rest.get(API_PLANETS, (req, res, ctx) =>
    res(
      ctx.json({
        results: planets(req.url.searchParams.get('search') ?? undefined),
      }),
    ),
  ),
  rest.get(API_SPECIES, (req, res, ctx) => res(ctx.json({ results: [] }))),
  rest.get(API_STARSHIPS, (req, res, ctx) => res(ctx.json({ results: [] }))),
  rest.get(API_VEHICLES, (req, res, ctx) => res(ctx.json({ results: [] }))),
  rest.get(`${API_FILMS}/1`, (req, res, ctx) => res(ctx.json(film1))),
  rest.get(`${API_FILMS}/2`, (req, res, ctx) => res(ctx.json(film2))),
  rest.get(`${API_FILMS}/3`, (req, res, ctx) => res(ctx.json(film3))),
  rest.get(`${API_FILMS}/6`, (req, res, ctx) => res(ctx.json(film6))),
)

export default server
