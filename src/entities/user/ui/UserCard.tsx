import type { User } from '../model/types'

export type UserCardProps = {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <article aria-label="User profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </article>
  )
}
