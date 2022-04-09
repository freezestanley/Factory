import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'
import { Link } from 'react-router-dom'

let cx = classNames.bind(Style)
const Login = () => {
  return (
    <div className={cx({ login: true })}>
      this is Login
      <Link to={'/other'}> jump </Link>
    </div>
  )
}
export default Login
