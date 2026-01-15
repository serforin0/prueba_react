import { render, screen } from '@testing-library/react'

import { UserCard } from './UserCard'
import type { User } from '../model/types'

describe('UserCard', () => {
  it('renders user name and email', () => {
    const user: User = {
      id: '1',
      name: 'Ada Lovelace',
      email: 'ada@example.com',
    }

    render(<UserCard user={user} />)

    expect(screen.getByRole('heading', { name: /ada lovelace/i })).toBeTruthy()
    expect(screen.getByText('ada@example.com')).toBeTruthy()
  })
})
