import styled from 'styled-components'

import media from '~/common/infrastructure/styles/media'
import { Title } from '~/films/infrastructure/components/Card/styles'

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  margin: auto;
  padding: 2rem 1rem;

  ${media.medium} {
    gap: 1.5rem;
    max-width: ${({ theme }) => theme.breakpoints.extralarge / 16}rem;
    padding: 3rem 1.5rem;
  }
`

export const Anchor = styled.a`
  :hover {
    ${Title} {
      color: ${({ theme }) => theme.colors.films.card.title.hover};
    }
  }
`
