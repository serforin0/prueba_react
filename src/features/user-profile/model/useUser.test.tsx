import { renderHook, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

import { useUser } from './useUser'
import { fetchUser } from '../../../entities/user/api/user.api'
import type { User } from '../../../entities/user/model/types'

vi.mock('../../../entities/user/api/user.api', () => ({
  fetchUser: vi.fn(),
}))

describe('useUser', () => {
  it('fetches and returns user data', async () => {
    const user: User = {
      id: '42',
      name: 'Grace Hopper',
      email: 'grace@example.com',
    }

    vi.mocked(fetchUser).mockResolvedValueOnce(user)

    const { result } = renderHook(() => useUser('42'))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.data).toEqual(user)
    expect(result.current.error).toBeNull()
  })
})
