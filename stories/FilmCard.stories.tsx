import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import CardComponent from '~/films/infrastructure/components/Card'

export default {
  args: {
    coverUrl:
      'https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=1%2C318%2C999%2C499',
    episode: 'Episode',
    release: 'Release',
    title: 'Title',
  },
  component: CardComponent,
  title: 'Films/Molecules/Card',
} as ComponentMeta<typeof CardComponent>

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
)

export const Card = Template.bind({})
