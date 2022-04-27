// @ts-nocheck
import React, { Profiler } from 'react'
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
  const callback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(`id:${id}`)
    console.log(`phase:${phase}`)
    console.log(`actualDuration:${actualDuration}`)
    console.log(`baseDuration:${baseDuration}`)
    console.log(`startTime:${startTime}`)
    console.log(`commitTime:${commitTime}`)
    console.log(`interactions:${interactions}`)
  }
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
            <Profiler id="AsyncBook" onRender={callback}>
              <React.Suspense fallback={<Loading />}>
                <AsyncBook />
              </React.Suspense>
            </Profiler>
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
