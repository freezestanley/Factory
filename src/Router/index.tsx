import React from 'react'
import { useRoutes } from 'react-router-dom'
import Notfound from '@/Components/NotFound'
import Layer from '@/Layer'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { AuthProvider, RequireAuth } from './Auth'
import Loading from '@/Components/Loading'
import { lazy } from '@loadable/component'
import Car from '@P/Car'
import Lazy from '@P/Lazy'
import Login from '@P/Login'
import Ert from '@P/Ert'
import { AsyncBook, AsyncShop, AsyncTeam, AsyncAsset } from './Async'

export default function () {
  return useRoutes([
    {
      path: '/',
      element: (
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
      ),
      children: [
        {
          index: true,
          element: (
            <React.Suspense fallback={<Loading />}>
              <AsyncBook />
            </React.Suspense>
          )
        },
        {
          path: '/shop',
          element: (
            <RequireAuth>
              <React.Suspense fallback={<Loading />}>
                <AsyncShop />
              </React.Suspense>
            </RequireAuth>
          )
        },
        {
          path: '/team',
          element: (
            <React.Suspense fallback={<Loading />}>
              <AsyncTeam />
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
        <React.Suspense fallback={<Loading />}>
          <AsyncAsset />
        </React.Suspense>
      )
    },
    {
      path: '/lazy',
      element: (
        <RequireAuth>
          <Lazy />
        </RequireAuth>
      )
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/ert',
      element: <Ert />
    },
    {
      path: '*',
      element: <Notfound />
    }
  ])
}
