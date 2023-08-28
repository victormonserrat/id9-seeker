import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import SearchComponent from '~/common/infrastructure/components/Search'

export default {
  args: {
    placeholder: 'Placeholder',
  },
  argTypes: {
    onChange: {},
    placeholder: { table: { type: { summary: 'string' } }, type: 'string' },
  },
  component: SearchComponent,
  title: 'Common/Molecules/Search',
} as ComponentMeta<typeof SearchComponent>

const Template: ComponentStory<typeof SearchComponent> = (args) => (
  <SearchComponent {...args} />
)

export const Search = Template.bind({})
