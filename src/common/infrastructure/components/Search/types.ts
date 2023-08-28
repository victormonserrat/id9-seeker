import { InputHTMLAttributes } from 'react'

export type SearchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  onChange?: (value: string) => void
  value?: string
}

export type UseSearchProps = {
  onChange: SearchProps['onChange']
  value: SearchProps['value']
}
