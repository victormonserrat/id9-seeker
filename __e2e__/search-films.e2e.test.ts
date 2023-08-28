import { expect, test } from '@playwright/test'

import film1 from '../__mocks__/films/1'
import film2 from '../__mocks__/films/2'
import film3 from '../__mocks__/films/3'
import film6 from '../__mocks__/films/6'
import romanNumeral from '../lib/romanNumeral'
import FilmRelease from '../src/films/domain/models/release'

test.describe('Search films', () => {
  test('Search by term', async ({ page }) => {
    await page.goto('/')
    await page.type('input[name="search"]', 'luke')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/?search=luke')

    const films = [film1, film2, film3, film6]

    await Promise.all([
      ...films.map(
        async (value) =>
          await expect(
            page.locator(
              `text=Episode ${romanNumeral(value.episode_id)} - ${value.title}`,
            ),
          ).toBeVisible(),
      ),
      ...films.map(
        async (value) =>
          await expect(
            page.locator(
              `text=${FilmRelease.fromString(value.release_date).format()}`,
            ),
          ).toBeVisible(),
      ),
    ])
  })

  test('Search by terms', async ({ page }) => {
    await page.goto('/')
    await page.type('input[name="search"]', 'luke tatooine')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/?search=luke%20tatooine')

    const films = [film1, film3, film6]

    await Promise.all([
      ...films.map(
        async (value) =>
          await expect(
            page.locator(
              `text=Episode ${romanNumeral(value.episode_id)} - ${value.title}`,
            ),
          ).toBeVisible(),
      ),
      ...films.map(
        async (value) =>
          await expect(
            page.locator(
              `text=${FilmRelease.fromString(value.release_date).format()}`,
            ),
          ).toBeVisible(),
      ),
    ])
  })
})
