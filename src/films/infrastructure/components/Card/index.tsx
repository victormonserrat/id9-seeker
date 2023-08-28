import Image from 'next/image'
import { memo } from 'react'

import {
  Body,
  Component,
  Content,
  ImageContainer,
  Release,
  Separator,
  Title,
} from './styles'
import { FilmCardProps } from './types'

const FilmCard = ({
  body,
  coverUrl,
  episode,
  release,
  title,
  ...props
}: FilmCardProps) => (
  <Component {...props}>
    <ImageContainer>
      <Image
        alt={`${title} Cover`}
        height="50%"
        layout="responsive"
        priority
        src={coverUrl}
        width="100%"
      />
    </ImageContainer>
    <Separator aria-hidden role="separator" />
    <Content>
      <div>
        <Title>{`Episode ${episode} - ${title}`}</Title>
        {body ? <Body>{body}</Body> : null}
      </div>
      <Release>{release}</Release>
    </Content>
  </Component>
)

export default memo(FilmCard)

export type { FilmCardProps }
