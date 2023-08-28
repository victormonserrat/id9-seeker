import server from '__mocks__/server'
import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  thenIshouldSeeTheFollowingFilms,
  whenIsearchBy,
} from '~/tests/steps/films'

const feature = loadFeature('features/films/search-films.feature')

defineFeature(feature, (test) => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  test('Search by term', ({ then, when }) => {
    whenIsearchBy(when)
    thenIshouldSeeTheFollowingFilms(then)
  })

  test('Search by terms', ({ then, when }) => {
    whenIsearchBy(when)
    thenIshouldSeeTheFollowingFilms(then)
  })
})
