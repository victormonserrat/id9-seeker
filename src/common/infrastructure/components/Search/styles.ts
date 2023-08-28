import styled from 'styled-components'

import { leftEdgeStyles } from '~/common/infrastructure/styles/edges'
import media from '~/common/infrastructure/styles/media'

const BUTTON_IMAGE_SIZE = 50
const BUTTON_SIZE = 42
const BUTTON_HEIGHT_MEDIUM = 46
const BUTTON_WIDTH_MEDIUM = 140
const BUTTON_IMAGE_OFFSET_X = (BUTTON_SIZE - BUTTON_IMAGE_SIZE) / 2
const BUTTON_IMAGE_OFFSET_X_MEDIUM =
  (BUTTON_HEIGHT_MEDIUM - BUTTON_IMAGE_SIZE) / 2
const BUTTON_IMAGE_OFFSET_Y = BUTTON_IMAGE_OFFSET_X - BUTTON_IMAGE_SIZE
const BUTTON_IMAGE_OFFSET_Y_MEDIUM =
  BUTTON_IMAGE_OFFSET_X_MEDIUM - BUTTON_IMAGE_SIZE
const INPUT_HEIGHT = 64
const INPUT_HEIGHT_MEDIUM = 68
const BUTTON_OFFSET = (INPUT_HEIGHT - BUTTON_SIZE) / 2
const BUTTON_OFFSET_MEDIUM = (INPUT_HEIGHT_MEDIUM - BUTTON_HEIGHT_MEDIUM) / 2
const INPUT_PADDING = 18
const INPUT_PADDING_MEDIUM = 26
const INPUT_PADDING_RIGHT = INPUT_PADDING + BUTTON_SIZE + BUTTON_OFFSET
const INPUT_PADDING_RIGHT_MEDIUM =
  INPUT_PADDING_MEDIUM + BUTTON_WIDTH_MEDIUM + BUTTON_OFFSET_MEDIUM

export const Button = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.search.button.background.default};
  background-image: url(https://static-mh.content.disney.io/starwars/assets/shared/search/search_icon-2c79f0615f1d.png);
  background-position: ${BUTTON_IMAGE_OFFSET_X}px ${BUTTON_IMAGE_OFFSET_Y}px;
  background-repeat: no-repeat;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.search.button.text};
  height: ${BUTTON_SIZE / 16}rem;
  overflow: hidden;
  position: absolute;
  right: ${BUTTON_OFFSET / 16}rem;
  text-indent: 100%;
  top: ${BUTTON_OFFSET / 16}rem;
  width: ${BUTTON_SIZE / 16}rem;

  :enabled:hover {
    background-color: ${({ theme }) =>
      theme.colors.search.button.background.hover};
  }

  ${media.medium} {
    background-position: ${BUTTON_IMAGE_OFFSET_X_MEDIUM}px
      ${BUTTON_IMAGE_OFFSET_Y_MEDIUM}px;
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: ${({ theme }) => theme.font.weights.light};
    height: ${BUTTON_HEIGHT_MEDIUM / 16}rem;
    padding-left: ${BUTTON_HEIGHT_MEDIUM / 16}rem;
    padding-right: 1rem;
    right: ${BUTTON_OFFSET_MEDIUM / 16}rem;
    text-indent: unset;
    text-overflow: ellipsis;
    text-transform: uppercase;
    top: ${BUTTON_OFFSET_MEDIUM / 16}rem;
    width: ${BUTTON_WIDTH_MEDIUM / 16}rem;
  }
`

export const Component = styled.form`
  background-color: ${({ theme }) => theme.colors.search.background};
  border-radius: 0.375rem;
  position: relative;

  ${media.medium} {
    ${({ theme }) => leftEdgeStyles(theme.colors.search.background)};
  }
`

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.search.input.text};
  font-size: ${({ theme }) => theme.font.sizes.extralarge};
  font-weight: ${({ theme }) => theme.font.weights.extralight};
  height: ${INPUT_HEIGHT / 16}rem;
  padding: ${INPUT_PADDING / 16}rem;
  padding-right: ${INPUT_PADDING_RIGHT / 16}rem;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.colors.search.input.placeholder};
  }

  ${media.medium} {
    height: ${INPUT_HEIGHT_MEDIUM / 16}rem;
    padding: ${INPUT_PADDING_MEDIUM / 16}rem;
    padding-right: ${INPUT_PADDING_RIGHT_MEDIUM / 16}rem;
  }
`

export const InputContainer = styled.div`
  ::after {
    background-color: ${({ theme }) => theme.colors.search.underline};
    bottom: 0.5rem;
    content: '';
    height: 0.0625rem;
    left: 0;
    margin-left: ${INPUT_PADDING / 16}rem;
    margin-right: ${INPUT_PADDING_RIGHT / 16}rem;
    position: absolute;
    width: -webkit-fill-available;
  }

  ${media.medium} {
    ::after {
      margin-left: ${INPUT_PADDING_MEDIUM / 16}rem;
      margin-right: ${INPUT_PADDING_RIGHT_MEDIUM / 16}rem;
    }
  }
`
