import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import Card from './assets/components/Card'
import camera from './assets/img/camera.svg'

let cx = classNames.bind(Style)
const App = () => {
  return (
    <div className={cx({ demo: true })}>
      <Card />
      this is app
      <img src={camera} />
      <div className={cx({ box1: true })}>
        <div className={cx({ content: true })}>tttt</div>
      </div>
      <div className={cx({ box2: true })}>
        <div className={cx({ content: true })}>tttt</div>
      </div>
    </div>
  )
}
export default App
