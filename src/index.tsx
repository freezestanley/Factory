import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouter from './Router'
import './global.less'

const Application = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
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
