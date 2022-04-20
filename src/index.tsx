import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouter from './Router'
import './global.less'
import { AuthProvider, RequireAuth } from '@/Router/Auth'
import Debugger from '@/Toolbox/debugger'
import dataDb from '@TB/goDB'
// import Team from '@P/Team'

const Application = () => {
  return (
    // <div>123123</div>
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Car />} />
    //     <Route path="invoices" element={<App />}>
    //       <Route path=":invoiceId" element={<Shop />} />
    //       <Route path="sent" element={<Book />} />
    //       <Route index element={<Car />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
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
