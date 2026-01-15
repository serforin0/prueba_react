import type { ReactNode } from 'react'

type AppQueryClientProviderProps = {
  children: ReactNode
}

export function AppQueryClientProvider({
  children,
}: AppQueryClientProviderProps) {
  return <>{children}</>
}
