// import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouter from './Router'
import { AuthProvider, RequireAuth } from '@/Router/Auth'
import Debugger from '@/Toolbox/debugger'
import './global.less'
import { enableAllPlugins } from 'immer'
import { ThemeProvider } from '@/Theme'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

function FallbackComponent() {
  return <div>warning error</div>
}

const app = document.getElementById('app')
// const Application = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <ThemeProvider container={app}>
//           <AppRouter />
//         </ThemeProvider>
//       </AuthProvider>
//     </BrowserRouter>
//     // <div>123123123</div>
//   )
// }

// ReactDom.render(<Application />, app)
const root = createRoot(app!)
// eslint-disable-next-line no-undef
if (Mode === 'production') {
  // Sentry.init({
  //   dsn: '',
  //   integrations: [new BrowserTracing()],
  //   tracesSampleRate: 1.0
  // })
  root.render(
    // <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
    // </Sentry.ErrorBoundary>
  )
} else {
  root.render(
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

// eslint-disable-next-line no-undef
if (Mode === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}
if (module.hot) {
  module.hot.accept()
}
Debugger()
enableAllPlugins()
