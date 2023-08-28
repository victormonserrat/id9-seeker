import { css } from 'styled-components'

export const bottomEdgeStyles = (color: string) => css`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0.375rem;
  position: relative;

  ::after,
  ::before {
    border-top: 0.375rem solid ${color};
    content: '';
    bottom: -0.375rem;
    position: absolute;
  }

  ::after {
    border-bottom-right-radius: 0.375rem;
    border-left: 0.375rem solid transparent;
    right: 0;
    width: 25%;
  }

  ::before {
    border-bottom-left-radius: 0.375rem;
    border-right: 0.375rem solid transparent;
    left: 0;
    width: 50%;
  }
`

export const revertBottomEdgeStyles = css`
  border-bottom-left-radius: revert;
  border-bottom-right-radius: revert;
  margin-bottom: revert;
  position: revert;

  ::after,
  ::before {
    all: revert;
    content: revert;
    bottom: revert;
    position: revert;
  }

  ::after {
    border-bottom-right-radius: revert;
    border-left: revert;
    right: revert;
    width: revert;
  }

  ::before {
    border-bottom-left-radius: revert;
    border-right: revert;
    left: revert;
    width: revert;
  }
`

export const leftEdgeStyles = (color: string) => css`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  margin-left: 0.25rem;
  position: relative;

  ::after,
  ::before {
    border-right: 0.25rem solid ${color};
    content: '';
    left: -0.25rem;
    position: absolute;
  }

  ::after {
    border-bottom-left-radius: 0.375rem;
    border-top: 0.25rem solid transparent;
    bottom: 0;
    height: 40%;
  }

  ::before {
    border-bottom: 0.25rem solid transparent;
    border-top-left-radius: 0.375rem;
    height: 30%;
    top: 0;
  }
`

export const revertLeftEdgeStyles = css`
  border-bottom-left-radius: revert;
  border-top-left-radius: revert;
  margin-left: revert;
  position: revert;

  ::after,
  ::before {
    border-right: revert;
    content: revert;
    left: revert;
    position: revert;
  }

  ::after {
    border-bottom-left-radius: revert;
    border-top: revert;
    bottom: revert;
    height: revert;
  }

  ::before {
    border-bottom: revert;
    border-top-left-radius: revert;
    height: revert;
    top: revert;
  }
`
