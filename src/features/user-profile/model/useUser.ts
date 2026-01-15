import { useEffect, useState } from 'react'

import { fetchUser } from '../../../entities/user/api/user.api'
import type { User } from '../../../entities/user/model/types'

export type UseUserResult = {
  data: User | null
  error: Error | null
  isLoading: boolean
}

export const useUser = (userId: string): UseUserResult => {
  const [data, setData] = useState<User | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const loadUser = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const user = await fetchUser(userId)

        if (isMounted) {
          setData(user)
        }
      } catch (caughtError) {
        if (isMounted) {
          setError(caughtError as Error)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadUser()

    return () => {
      isMounted = false
    }
  }, [userId])

  return { data, error, isLoading }
}
