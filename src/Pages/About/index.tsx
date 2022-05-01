import React from 'react'
import classNames from 'classnames/bind'
import Style from './index.less'
import camera from './assets/img/camera.svg'
import { Routes, Route, Outlet, useOutletContext, Link } from 'react-router-dom'
import { useLayer } from '@/Layer'

let cx = classNames.bind(Style)
const About = () => {
  return <div className={cx({ About: true })}>this is About</div>
}
export default About
