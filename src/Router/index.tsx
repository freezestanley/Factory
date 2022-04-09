import React from 'react'
import { useRoutes } from 'react-router-dom'
import Notfound from '@/Components/NotFound'
import Layer from '@/Layer'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { AuthProvider, RequireAuth } from './Auth'

import Car from '@P/Car'
import Lazy from '@P/Lazy'
// asdfas

import loadable, { lazy } from '@loadable/component'

const AsyncComponent1 = lazy(
  (props: { page: string }) =>
    import(
      /*
      webpackChunkName: "Book",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Book`
    )
)
const AsyncComponent2 = lazy(
  (props: { page: string }) =>
    import(
      /*
      webpackChunkName: "Shop",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Shop`
    )
)
const AsyncComponent3 = lazy(
  (props: { page: string }) =>
    import(
      /*
      webpackChunkName: "Team",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Team`
    )
)
const AsyncComponent4 = lazy(
  (props: { page: string }) =>
    import(
      /*
      webpackChunkName: "Asset",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Asset`
    )
)

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
            <React.Suspense fallback={<div>Loading</div>}>
              <AsyncComponent1 page={'Book'} />
            </React.Suspense>
          )
        },
        {
          path: '/shop',
          element: (
            <React.Suspense fallback={<div>Loading</div>}>
              <AsyncComponent2 page={'Shop'} />
            </React.Suspense>
          )
        },
        {
          path: '/team',
          element: (
            <React.Suspense fallback={<div>Loading</div>}>
              <AsyncComponent3 page={'Team'} />
            </React.Suspense>
          )
        }
      ]
    },
    {
      path: '/car',
      element: <Car />
    },
    {
      path: '/asset',
      element: (
        <React.Suspense fallback={<div>Loading</div>}>
          <AsyncComponent4 page={'Team'} />
        </React.Suspense>
      )
    },
    {
      path: '/lazy',
      element: <Lazy />
    },
    {
      path: '*',
      element: <Notfound />
    }
  ])
}
