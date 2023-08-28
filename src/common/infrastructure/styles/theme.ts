const theme = {
  breakpoints: {
    extralarge: 1200,
    large: 992,
    medium: 768,
    small: 576,
  },
  colors: {
    films: {
      card: {
        background: 'var(--color-grey70)',
        body: 'var(--color-grey20)',
        release: 'var(--color-yellow)',
        separator: 'var(--color-yellow)',
        title: {
          default: 'var(--color-grey10)',
          hover: 'var(--color-yellow)',
        },
      },
    },
    mark: {
      background: 'var(--color-black)',
      text: 'var(--color-yellow)',
    },
    primary: {
      background: 'var(--color-grey80)',
      text: 'var(--color-grey10)',
    },
    search: {
      background: 'var(--color-grey50)',
      button: {
        background: {
          default: 'var(--color-grey40)',
          hover: 'var(--color-grey30)',
        },
        text: 'var(--color-white)',
      },
      input: {
        placeholder: 'var(--color-grey20)',
        text: 'var(--color-white)',
      },
      underline: 'var(--color-grey60)',
    },
    secondary: {
      background: 'var(--color-black)',
      text: 'var(--color-grey20)',
    },
  },
  font: {
    families: {
      primary: 'var(--font-primary)',
    },
    sizes: {
      extralarge: '1.5rem',
      large: '1.25rem',
      medium: '1rem',
      small: '0.75rem',
    },
    weights: {
      black: 900,
      bold: 700,
      extrabold: 800,
      extralight: 200,
      light: 300,
      medium: 500,
      normal: 400,
      semibold: 600,
      thin: 100,
    },
  },
} as const

export type Theme = typeof theme

export default theme
