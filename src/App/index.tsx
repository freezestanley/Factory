import React from 'react'
import classNames from 'classnames/bind'
// import Loadable from 'react-loadable'
// import doit from '../utils'
import Book from '@/Book'
import Home from '@/Home'
import Shop from '@/Shop'
import Style from './index.less'
import tu from './1.jpg'
// import Lazy from '@/utils/lazy'

// const Home = Loadable({
//   loader: () => import('@/Home'), // oh no!
//   loading: () => <div>Loading...</div>
// })
// const Book = React.lazy(() => import('@/Book'))
// const Home = Lazy('@/Book')

let cx = classNames.bind(Style)

const App = () => {
  let className = cx({
    App: true
  })
  return (
    <div className={className}>
      {/* <img src={tu} /> */}
      <Book />
      <Home />
      <Shop />
      this is App test 1231231231231231231
    </div>
  )
}

export default App
