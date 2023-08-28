import ValueObject from '~/common/domain/valueObject'

type FilmCoverUrl = Readonly<ValueObject<string>>

const fromEpisodeNumber = (value: number): FilmCoverUrl => {
  switch (value) {
    case 1:
      return ValueObject.fromValue(
        'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_f5832812.jpeg?region=0%2C250%2C678%2C340',
      )
    case 2:
      return ValueObject.fromValue(
        'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=0%2C188%2C678%2C340',
      )
    case 3:
      return ValueObject.fromValue(
        'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C356%2C746%2C374',
      )
    case 4:
      return ValueObject.fromValue(
        'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=40%2C219%2C586%2C293',
      )
    case 5:
      return ValueObject.fromValue(
        'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C299%2C612%2C306',
      )
    case 6:
      return ValueObject.fromValue(
        'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=9%2C210%2C624%2C312',
      )
    default:
      return ValueObject.fromValue(
        'https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=1%2C318%2C999%2C499',
      )
  }
}

const FilmCoverUrl = { fromEpisodeNumber } as const

export default FilmCoverUrl
