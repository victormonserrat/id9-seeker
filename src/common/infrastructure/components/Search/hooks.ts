import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'

import { UseSearchProps } from './types'

export const useSearch = ({ onChange, value }: UseSearchProps) => {
  const [inputValue, setInputValue] = useState(value ?? '')

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value),
    [],
  )

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      if (!onChange) return

      event.preventDefault()
      onChange(inputValue)
    },
    [inputValue, onChange],
  )

  useEffect(() => setInputValue(value ?? ''), [value])

  return { handleChange, handleSubmit, inputValue }
}
