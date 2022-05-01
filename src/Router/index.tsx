// @ts-nocheck
import React, { Profiler } from 'react'
import { useRoutes } from 'react-router-dom'
import Notfound from '@/Components/NotFound'
import { RequireAuth } from './Auth'
import Loading from '@/Components/Loading'
import Car from '@P/Car'
import Lazy from '@P/Lazy'
import Login from '@P/Login'
import Ert from '@P/Ert'
import About from '@P/About'
import { AsyncAsset } from './Async'
import LayerRouter from './Layer'

export default function () {
  return useRoutes([
    ...LayerRouter(),
    {
      path: '/about',
      element: <About />
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
