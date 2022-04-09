import React, { useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import Loading from '@/Components/Loading'
import Notfound from '@/Components/NotFound'
import Layer from '@/Layer'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { AuthProvider, RequireAuth } from './Auth'

import Login from '@P/Login'
// const Car = React.lazy(() => import(/* webpackChunkName: "Car" */ '@P/Car'))
// const Shop = React.lazy(() => import(/* webpackChunkName: "Shop" */ '@P/Shop'))
// const Book = React.lazy(() => import(/* webpackChunkName: "Book" */ '@P/Book'))
// const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '@P/Home'))

// import Car from '@P/Car'
// import Shop from '@P/Shop'
// import Book from '@P/Book'
// import Home from '@P/Home'
// import Team from '@P/Team'
// import Lazy from '@P/Lazy'

import { lazy } from '@loadable/component'

const AsyncComponent = lazy(
  (props: { page: string }) =>
    import(
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
            // <React.Suspense fallback={<Loading />}>
            //   <AsyncComponent page={'Home'} />
            // </React.Suspense>
            <Login />
          )
        }
        // {
        //   path: 'messages',
        //   element: (
        //     <React.Suspense fallback={<Loading />}>
        //       <AsyncComponent page={'Book'} />
        //     </React.Suspense>
        //     // <Book />
        //   )
        // },
        // {
        //   path: 'shop',
        //   element: (
        //     <RequireAuth>
        //       <React.Suspense fallback={<Loading />}>
        //         <AsyncComponent page={'Shop'} />
        //       </React.Suspense>
        //     </RequireAuth>
        //     // <Shop />
        //   )
        // }
      ]
    },
    // {
    //   path: 'team',
    //   element: (
    //     <React.Suspense fallback={<Loading />}>
    //       <AsyncComponent page={'Team'} />
    //     </React.Suspense>
    //     // <Team />
    //   )
    // },
    // {
    //   path: 'login',
    //   element: <Login />
    // },
    // {
    //   path: 'lazy',
    //   element: (
    //     <React.Suspense fallback={<Loading />}>
    //       <AsyncComponent page={'Lazy'} />
    //     </React.Suspense>
    //     // <Lazy />
    //   )
    // },
    {
      path: '*',
      element: <Notfound />
    }
  ])
}
