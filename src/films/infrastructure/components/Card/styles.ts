import styled from 'styled-components'

import {
  bottomEdgeStyles,
  leftEdgeStyles,
  revertBottomEdgeStyles,
} from '~/common/infrastructure/styles/edges'
import media from '~/common/infrastructure/styles/media'

export const Body = styled.p`
  display: none;

  ${media.large} {
    color: ${({ theme }) => theme.colors.films.card.body};
    display: revert;
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: ${({ theme }) => theme.font.weights.normal};
    line-height: ${({ theme }) => theme.font.sizes.medium};
    margin-top: 0.375rem;
  }
`

export const Title = styled.h5`
  color: ${({ theme }) => theme.colors.films.card.title.default};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weights.medium};
  text-transform: uppercase;

  ${media.medium} {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`

export const Component = styled.div`
  background-color: ${({ theme }) => theme.colors.films.card.background};
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  ${({ theme }) => bottomEdgeStyles(theme.colors.films.card.background)}

  ${media.medium} {
    ${revertBottomEdgeStyles}
    ${({ theme }) => leftEdgeStyles(theme.colors.films.card.background)}
    flex-direction: row-reverse;
    width: 100%;
  }
`

export const Content = styled.div`
  background-image: url(https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top-dca2c5ab1b2e.png);
  background-size: 0.4375rem;
  background-repeat: repeat-x;
  background-position: top left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  padding: 0.75rem;

  ${media.medium} {
    width: calc(55% - 0.05rem);
  }
`

export const ImageContainer = styled.div`
  img {
    border-radius: 0.375rem 0.375rem 0 0;
  }

  ${media.medium} {
    width: calc(45% - 0.05rem);

    img {
      border-radius: 0 0.375rem 0.375rem 0;
    }
  }
`

export const Release = styled.span`
  color: ${({ theme }) => theme.colors.films.card.release};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  text-transform: uppercase;
`

export const Separator = styled.div`
  background-color: ${({ theme }) => theme.colors.films.card.separator};
  height: 0.1rem;

  ${media.medium} {
    height: revert;
    width: 0.1rem;
  }
`
