import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
// import Loadable from 'react-loadable'
// import doit from '../utils'
import Book from '@/Book'
import Home from '@/Home'
import Shop from '@/Shop'
import Style from './index.less'
import tu from './1.jpg'
// import A from './a.png'
// import Lazy from '@/utils/lazy'

// const Home = Loadable({
//   loader: () => import('@/Home'), // oh no!
//   loading: () => <div>Loading...</div>
// })
// const Book = React.lazy(() => import('@/Book'))
// const Home = Lazy('@/Book')

// let cx = classNames.bind(Style)
const App = () => {
  // let className = cx({
  //   demo: true
  // })
  return (
    <div className={Style.demo}>
      {/* <Book />
      <Home />
      <Shop /> */}
      {/* <img src={A} /> */}
      {/* {JSON.stringify(Style)} */}
      this is App test 2222
    </div>
  )
}
export default App
