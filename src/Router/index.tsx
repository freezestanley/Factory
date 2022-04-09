import React from 'react'
import { useRoutes } from 'react-router-dom'
import Notfound from '@/Components/NotFound'
import Layer from '@/Layer'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { AuthProvider, RequireAuth } from './Auth'

// import Home from '@P/Home'
// import Book from '@P/Book'
// import Shop from '@P/Shop'
// import Login from '@P/Login'
import Car from '@P/Car'
import Lazy from '@P/Lazy'

import loadable, { lazy } from '@loadable/component'
//webpackChunkName: "[request]"
//webpackMode: "lazy-once"
const AsyncComponent = lazy(
  (props: { page: string }) =>
    import(
      /* webpackPrefetch: true */
      /* webpackMode: "lazy-once" */
      /* webpackPreload: true */
      `@P/${props?.page}`
    )
)
const AsyncComponent1 = loadable(
  (props: { page: string }) =>
    import(
      /* webpackChunkName: "[request]" */
      /* webpackPrefetch: true */
      /* webpackMode: "lazy-once" */
      /* webpackPreload: true */
      `@P/${props?.page}`
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
            // <React.Suspense fallback={<div>Loading</div>}>
            //   <AsyncComponent1 page={'Book'} />
            // </React.Suspense>
            // <Book />
            <AsyncComponent1 page={'Book'} />
          )
          // loadable(
          //   (props: { page: string }) =>
          //     import(
          //       /* webpackChunkName: "Book" */
          //       /* webpackPrefetch: true */
          //       /* webpackPreload: true */
          //       `@P/Book`
          //     )
          // )
        },
        {
          path: 'shop',
          element: (
            // <React.Suspense fallback={<div>Loading</div>}>
            //   <AsyncComponent page={'Shop'} />
            // </React.Suspense>
            // <Shop />
            <AsyncComponent1 page={'Shop'} />
            // loadable(
            //   (props: { page: string }) =>
            //     import(
            //       /* webpackChunkName: "Shop" */
            //       /* webpackPrefetch: true */
            //       /* webpackPreload: true */
            //       `@P/Shop`
            //     )
            // )
          )
        },
        {
          path: 'other', // asd
          element: (
            // <React.Suspense fallback={<div>Loading</div>}>
            //   <AsyncComponent page={'Team'} />
            // </React.Suspense>
            // <Shop />
            <AsyncComponent1 page={'Team'} />
          )
          // loadable(
          //   (props: { page: string }) =>
          //     import(
          //       /* webpackChunkName: "Team" */
          //       /* webpackPrefetch: true */
          //       /* webpackPreload: true */
          //       `@P/Team`
          //     )
          // )
        }
      ]
    },
    {
      path: '/login',
      element: (
        // <React.Suspense fallback={<div>Loading</div>}>
        //   <AsyncComponent page={'Car'} />
        // </React.Suspense>
        <Car />
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
