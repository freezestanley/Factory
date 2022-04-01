import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'

let cx = classNames.bind(Style)
const Team = () => {
  return <div className={cx({ demo: true })}>this is Team</div>
}
export default Team
