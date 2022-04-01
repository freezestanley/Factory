import React from 'react'
import axios from 'axios'
import useSWR, { SWRConfig } from 'swr'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import camera from './assets/img/camera.svg'
import { Routes, Route, Outlet, useOutletContext } from 'react-router-dom'
import { useLayer } from '@/Layer'

let cx = classNames.bind(Style)
const App = () => {
  const [
    headerDisplay,
    setHeaderDisplay,
    footerDisplay,
    setFooterDisplay,
    headTitle,
    setHeadTitle
  ] = useLayer()

  const clickhandler = (e: any) => {
    // setHeaderDisplay(!headerDisplay)
    // setFooterDisplay(!footerDisplay)
    setHeadTitle('开周会')
  }
  return (
    <div className={cx({ demo: true })}>
      <div onClick={clickhandler}>toggle header/footer show/hide</div>
      <img src={camera} />
      <div className={cx({ box1: true })}>
        <div className={cx({ content: true })}>tttt</div>
      </div>
      <div className={cx({ box2: true })}>
        <div className={cx({ content: true })}>tttt</div>
      </div>
      <Outlet />
    </div>
  )
}
export default App
