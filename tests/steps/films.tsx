import { DefineStepFunction } from 'jest-cucumber'
import romanNumeral from 'lib/romanNumeral'
import { GetServerSidePropsContext } from 'next'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import Index, { getServerSideProps } from 'pages'

import { FilmSearchProps } from '~/films/infrastructure/pages/Search/types'
import { render, screen } from '~/tests/utils'

import FilmsTable from '../tables/films'

export const whenIsearchBy = (when: DefineStepFunction) =>
  when(/^I search by "(.*)"$/, async (search: string) => {
    const router = {
      prefetch: jest.fn(),
      query: { search },
      replace: jest.fn(),
    } as unknown as NextRouter

    const context = {
      query: { search },
      res: { setHeader: jest.fn() },
    } as unknown as GetServerSidePropsContext

    const { props } = (await getServerSideProps(context)) as {
      props: FilmSearchProps
    }

    render(
      <RouterContext.Provider value={router}>
        <Index {...props} />
      </RouterContext.Provider>,
    )
  })

export const thenIshouldSeeTheFollowingFilms = (then: DefineStepFunction) =>
  then('I should see the following films:', (table: FilmsTable) => {
    table.forEach((item) => {
      expect(screen.getByText(item.title, { exact: false })).toBeInTheDocument()
      expect(
        screen.getByText(`Episode ${romanNumeral(item.episode)} `, {
          exact: false,
        }),
      ).toBeInTheDocument()
      expect(
        screen.getByText(item.release, { exact: false }),
      ).toBeInTheDocument()
    })
  })
