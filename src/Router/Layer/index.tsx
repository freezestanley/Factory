import React, { Profiler } from 'react'
import { useRoutes } from 'react-router-dom'
import Layer from '@/Layer'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { RequireAuth } from '../Auth'
import Loading from '@/Components/Loading'
import Home from '@P/Home'
import { AsyncBook, AsyncShop, AsyncTeam } from '../Async'

// const callback = (
//   id,
//   phase,
//   actualDuration,
//   baseDuration,
//   startTime,
//   commitTime,
//   interactions
// ) => {
//   // console.log(`id:${id}`)
//   // console.log(`phase:${phase}`)
//   // console.log(`actualDuration:${actualDuration}`)
//   // console.log(`baseDuration:${baseDuration}`)
//   // console.log(`startTime:${startTime}`)
//   // console.log(`commitTime:${commitTime}`)
//   // console.log(`interactions:${interactions}`)
// }
export default function () {
  const LayerHeadRouter = [
    {
      path: 'home',
      element: <Header title={'this is home'} />
    },
    {
      path: '*',
      element: <Header title={'this is *'} />
    }
  ]
  const LayerFooterRouter = [
    {
      element: <Footer />
    },
    {
      path: '*',
      element: <Footer />
    }
  ]
  const LayerRouter = [
    {
      path: '/',
      element: (
        <Layer
          header={useRoutes(LayerHeadRouter) || null!}
          footer={useRoutes(LayerFooterRouter) || null!}
        />
      ),
      children: [
        {
          index: true,
          element: (
            // <Profiler id="AsyncBook" onRender={callback}>
            <React.Suspense fallback={<Loading />}>
              <AsyncBook />
            </React.Suspense>
            // </Profiler>
          )
        },
        {
          path: '/home',
          element: <Home />
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
    }
  ]
  return LayerRouter
}
