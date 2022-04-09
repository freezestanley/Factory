import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'
import { Link } from 'react-router-dom'

let cx = classNames.bind(Style)
const Team = () => {
  return (
    <div className={cx({ team: true })}>
      this is Team
      <Link to={'/other'}> other </Link>
      <Link to={'/lazy'}> lazy </Link>
    </div>
  )
}
export default Team
