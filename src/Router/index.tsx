import React, { useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import Loading from '@/Components/Loading'
import Notfound from '@/Components/NotFound'
import Layer from '@/Layer'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { AuthProvider, RequireAuth } from './Auth'
// import { lazy } from '@loadable/component'
import Login from '@P/Login'
const Car = React.lazy(() => import(/* webpackChunkName: "Car" */ '@P/Car'))
const Shop = React.lazy(() => import(/* webpackChunkName: "Shop" */ '@P/Shop'))
const Book = React.lazy(() => import(/* webpackChunkName: "Book" */ '@P/Book'))
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '@P/Home'))

// const AsyncComponent = lazy(
//   (props: { page: string }) =>
//     import(
//       /* webpackPrefetch: true */
//       /* webpackChunkName: "Home" */
//       `./${props.page}`
//     )
// )

export default function () {
  return useRoutes([
    {
      path: '/',
      element: (
        <AuthProvider>
          <Layer
            header={
              // <Routes>
              //   <Route path="shop" element={<Header />} />
              // </Routes>
              <Header title={'AAA'} />
            }
            footer={
              // <Routes>
              //   <Route path="shop" element={<Footer />} />
              // </Routes>
              <Footer />
            }
          />
        </AuthProvider>
      ),
      children: [
        {
          index: true,
          element: (
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          )
        },
        {
          path: 'messages',
          element: (
            <React.Suspense fallback={<Loading />}>
              <Book />
            </React.Suspense>
          )
        },
        {
          path: 'shop',
          element: (
            <RequireAuth>
              <React.Suspense fallback={<Loading />}>
                <Shop />
              </React.Suspense>
            </RequireAuth>
          )
        }
      ]
    },
    {
      path: 'team',
      element: (
        <React.Suspense fallback={<Loading />}>
          <Car />
        </React.Suspense>
      )
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '*',
      element: <Notfound />
    }
  ])
}
