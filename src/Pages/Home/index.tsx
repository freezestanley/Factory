import React from 'react'
import classNames from 'classnames/bind'
import Style from './index.style.less'
import camera from './assets/img/camera.svg'
import { Routes, Route, Outlet, useOutletContext, Link } from 'react-router-dom'
import { useLayer } from '@/Layer'
import Grally from '@/Components/Grally'

let cx = classNames.bind(Style)

const grally = [
  'http://www.wallcoo.com/sport/NBA_Lakers_2009_Champions/wallpapers/1920x1200/09poD2_wallpaper.jpg',
  'http://www.wallcoo.com/sport/NBA_Lakers_2009_Champions/wallpapers/1920x1200/09poD3_wallpaper.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/Ewen-Stenhouse.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/Ben-Newman.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/Ben-Newman-2.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/Dan-Cassaro.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/broken-social-scene-alex-westagate.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/broken-social-scene_doublenaut.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/broken-social-scene-feel-good-lost-wallpaper.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/lisa-congdon-fives.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/lisa-congdon-rocks.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/lisa-congdon-rocks.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/kim-holtermand-power-station.jpg',
  'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/kim-holtermand-koncerthuset.jpg'
]

const Home = () => {
  const [
    headerDisplay,
    setHeaderDisplay,
    footerDisplay,
    setFooterDisplay,
    headTitle,
    setHeadTitle,
    stageScrollEvent
  ] = useLayer()

  const clickhandler = (e: any) => {
    // setHeaderDisplay(!headerDisplay)
    // setFooterDisplay(!footerDisplay)
    setHeadTitle('开周会')
  }
  stageScrollEvent((ev: Event) => {
    console.log((ev.target as HTMLElement).scrollTop)
  })
  return (
    <div className={cx({ home: true })}>
      <Grally item={grally} />
      <div onClick={clickhandler}>toggle header/footer show/hide</div>
      <img src={camera} />
      <div className={cx({ box1: true })}>
        <div className={cx({ content: true })}>tttt</div>
      </div>
      <div className={cx({ box2: true })}>
        <div className={cx({ content: true })}>tttt</div>
      </div>
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
      <Outlet />
    </div>
  )
}
export default Home
