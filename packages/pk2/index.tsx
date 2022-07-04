import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  useNavigate,
  useLocation,
  useMatch
} from 'react-router-dom'
import { lazy } from '@loadable/component'

const Jump = () => {
  const router = useRoutes([
    {
      path: '/uio',
      element: <Jump />
    }
  ])
  debugger
  console.log(router)
  console.log(Routes)
  const navigate = useNavigate()
  return <div onClick={() => navigate('/bui')}>this is Mono</div>
}
// const MonoRouter = () => {
//   return useRoutes([
//     {
//       path: '/',
//       element: <Jump />
//     },
//     {
//       path: '/bui',
//       element: <div>this is Mono1</div>
//     }
//   ])
// }
// const Mono = () => <MonoRouter />

// const Mono = [
//   {
//     path: '/uio',
//     element: <Jump />
//   },
//   {
//     path: '/bui',
//     element: <div>this is Mono1</div>
//   }
// ]

const Monorepo = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Mono",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `./Mono`
    )
)
export default Monorepo
