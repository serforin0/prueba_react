import { UserCard } from '../../../entities/user/ui/UserCard'
import { useUser } from '../model/useUser'

export type UserProfileProps = {
  userId: string
}

export function UserProfile({ userId }: UserProfileProps) {
  const { data, error, isLoading } = useUser(userId)

  if (isLoading) {
    return <p>Loading user...</p>
  }

  if (error) {
    return <p role="alert">Failed to load user.</p>
  }

  if (!data) {
    return <p>No user found.</p>
  }

  return <UserCard user={data} />
}
