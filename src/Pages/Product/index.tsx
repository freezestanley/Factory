import React from 'react'
import classNames from 'classnames/bind'
import Style from './index.less'
import camera from './assets/img/camera.svg'

let cx = classNames.bind(Style)
const Product = () => {
  return <div className={cx({ product: true })}>this is Product</div>
}
export default Product
