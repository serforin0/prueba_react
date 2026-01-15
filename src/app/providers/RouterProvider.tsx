import { HomePage } from '../../pages'
import { AppShell } from './AppShell'

export function AppRouterProvider() {
  return (
    <AppShell>
      <HomePage />
    </AppShell>
  )
}
