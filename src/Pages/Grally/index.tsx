import React from 'react'
import Style from './index.style.less'
import GrallyImg from '@/Components/Grally'

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
const Grally = () => {
  return (
    <div className={Style.Grally}>
      <GrallyImg item={grally} />
    </div>
  )
}
export default Grally
