import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useFilmSearch = () => {
  const router = useRouter()

  const handleSearchChange = useCallback(
    async (value: string) => {
      router.replace(`?search=${value}`)
    },
    [router],
  )

  return { handleSearchChange }
}
