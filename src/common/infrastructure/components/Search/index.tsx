import { memo } from 'react'

import { useSearch } from './hooks'
import { Button, Component, Input, InputContainer } from './styles'
import { SearchProps } from './types'

const Search = ({
  className,
  disabled,
  onChange,
  value,
  ...props
}: SearchProps) => {
  const { handleChange, handleSubmit, inputValue } = useSearch({
    onChange,
    value,
  })

  return (
    <Component
      className={className}
      noValidate
      onSubmit={handleSubmit}
      role="search"
    >
      <InputContainer>
        <Input
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          disabled={disabled}
          name="search"
          onChange={handleChange}
          placeholder="Search"
          role="searchbox"
          spellCheck={false}
          type="text"
          value={inputValue}
          {...props}
        />
      </InputContainer>
      <Button disabled={disabled} type="submit">
        Search
      </Button>
    </Component>
  )
}

export default memo(Search)

export type { SearchProps }
