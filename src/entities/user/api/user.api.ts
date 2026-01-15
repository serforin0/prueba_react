import type { User } from '../model/types'

export const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(`/api/users/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  return (await response.json()) as User
}
