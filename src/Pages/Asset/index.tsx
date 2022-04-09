import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'
import a from './assets/img/a.png'

let cx = classNames.bind(Style)
const Car = () => {
  return (
    <div className={cx({ asset: true })}>
      this is Car
      <img src={camera} />
      <img src={a} />
    </div>
  )
}
export default Car
