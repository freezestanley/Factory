import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'

let cx = classNames.bind(Style)
const Lazy = () => {
  return <div className={cx({ lazy: true })}>this is Lazy</div>
}
export default Lazy
