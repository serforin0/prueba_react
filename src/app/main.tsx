import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import {
  AppQueryClientProvider,
  AppRouterProvider,
  ErrorBoundary,
} from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AppQueryClientProvider>
        <AppRouterProvider />
      </AppQueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
)
