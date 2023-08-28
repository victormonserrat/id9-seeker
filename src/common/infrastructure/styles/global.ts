import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-black: #000000;
    --color-blue: #106ae0;
    --color-green: #7bb149;
    --color-grey10: #dddddd;
    --color-grey20: #aaaaaa;
    --color-grey30: #5c5c5c;
    --color-grey40: #565656;
    --color-grey50: #3a3a3a;
    --color-grey60: #2c2c2c;
    --color-grey70: #282727;
    --color-grey80: #151515;
    --color-red: #d50032;
    --color-white: #ffffff;
    --color-yellow: #edec51;

    --font-primary: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }

  a {
    cursor: pointer;

    :-webkit-any-link {
      color: unset;
      text-decoration: unset;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary.background};
    color: ${({ theme }) => theme.colors.primary.text};
    font-family: ${({ theme }) => theme.font.families.primary};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  button {
    cursor: pointer;
    user-select: none;
  }

  button,
  input {
    appearance: unset;
    background-color: unset;
    border: unset;
    color: unset;
    font: unset;
    margin: unset;
    outline: unset;
    padding: unset;

    :disabled {
      cursor: unset;
    }
  }

  mark {
    background-color: ${({ theme }) => theme.colors.mark.background};
    color: ${({ theme }) => theme.colors.mark.text};
  }
`

export default GlobalStyle
