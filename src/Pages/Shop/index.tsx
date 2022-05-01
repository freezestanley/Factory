import React from 'react'
import classNames from 'classnames/bind'
import Style from './index.style.less'
import camera from './assets/img/camera.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '@/Router/Auth'

let cx = classNames.bind(Style)
const Shop = () => {
  debugger
  const xx = useAuth()
  debugger
  return (
    <div className={cx({ shop: true })}>
      this is shop
      <div>
        <Link to={'/'}> index </Link>
      </div>
      <br />
      <div>
        <Link to={'/shop'}> shop </Link>
      </div>
      <br />
      <div>
        <Link to={'/team'}> team </Link>
      </div>
      <br />
      <div>
        <Link to={'/car'}> car </Link>
      </div>
      <br />
      <div>
        <Link to={'/asset'}> asset </Link>
      </div>
      <br />
      <div>
        <Link to={'/lazy'}> lazy </Link>
      </div>
      <br />
    </div>
  )
}
export default Shop
