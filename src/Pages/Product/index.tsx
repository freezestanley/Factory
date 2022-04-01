import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'

let cx = classNames.bind(Style)
const Product = () => {
  return <div className={cx({ demo: true })}>this is Product</div>
}
export default Product
