import React from 'react'
import classNames from 'classnames/bind'
import Style from './index.less'
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
