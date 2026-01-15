import type { ReactNode } from 'react'
import { Component } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('Unhandled error in application:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Algo salió mal.</h1>
          <p>Intenta recargar la página para continuar.</p>
          <button onClick={() => window.location.reload()}>Recargar</button>
        </main>
      )
    }

    return this.props.children
  }
}
