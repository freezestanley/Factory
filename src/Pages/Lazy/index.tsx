import React from 'react'
import classNames from 'classnames/bind'
import Style from './index.style.less'
import camera from './assets/img/camera.svg'
import { Link } from 'react-router-dom'

let cx = classNames.bind(Style)
const Lazy = () => {
  return (
    <div className={cx({ lazy: true })}>
      this is Lazy
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
export default Lazy
