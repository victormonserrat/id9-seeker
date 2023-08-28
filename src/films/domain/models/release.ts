import ValueObject from '~/common/domain/valueObject'

type FilmRelease = Readonly<
  ValueObject<Date> & {
    format: () => string
  }
>

const format = (release: Date) => {
  const releaseDate = {
    dd: ('0' + release.getDate()).slice(-2),
    mm: ('0' + (release.getMonth() + 1)).slice(-2),
    yyyy: release.getFullYear(),
  }
  const year = new Date().getFullYear()
  const yearsDiff = year - releaseDate.yyyy
  const yearsDiffFormat =
    yearsDiff > 1
      ? `${yearsDiff} years ago`
      : yearsDiff > 0
      ? 'a year ago'
      : yearsDiff < -1
      ? `in ${yearsDiff} years`
      : yearsDiff < 0
      ? 'next year'
      : 'this year'

  return `${releaseDate.dd}-${releaseDate.mm}-${releaseDate.yyyy} (${yearsDiffFormat})`
}

const fromString = (value: string): FilmRelease => {
  const date = new Date(value)

  return {
    ...ValueObject.fromValue(date),
    format: () => format(date),
  }
}

const FilmRelease = { fromString } as const

export default FilmRelease
