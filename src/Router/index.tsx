// @ts-nocheck
import React, { Profiler } from 'react'
import { useRoutes } from 'react-router-dom'
import Notfound from '@/Components/NotFound'
import { RequireAuth } from './Auth'
import Loading from '@/Components/Loading'
import Lazy from '@P/Lazy'
import Login from '@P/Login'
import LayerRouter from './Layer'

export default function () {
  return useRoutes([
    ...LayerRouter(),
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
      path: '*',
      element: <Notfound />
    }
  ])
}
