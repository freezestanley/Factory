import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'
import { Routes, Route, Outlet, useOutletContext, Link } from 'react-router-dom'

let cx = classNames.bind(Style)
const Book = () => {
  return (
    <div className={cx({ book: true })}>
      <Link to={'/shop'}> jump </Link>
      this is book
    </div>
  )
}
export default Book
