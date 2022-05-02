// import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouter from './Router'
import { AuthProvider, RequireAuth } from '@/Router/Auth'
import Debugger from '@/Toolbox/debugger'
import './global.less'
const Application = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
    // <div>123123123</div>
  )
}

ReactDom.render(<Application />, document.getElementById('app'))
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
// eslint-disable-next-line
if (module.hot) {
  module.hot.accept()
}
Debugger()
