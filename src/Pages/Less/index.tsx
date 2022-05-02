import React from 'react'
import Style from './index.style.less'

const Less = () => {
  return (
    <div className={Style.Less}>
      <h1>样式设置</h1>
      <h3>css-loader mode: global local</h3>
      <p>
        当文件路径下global或是文件名还有global的样式文件会按global模式编译其他的为local模式
      </p>
      <h3>global.less全局样式</h3>
      <p>src/global.less设置项目全局样式</p>
      <h3>Project Theme设置</h3>
      <p></p>
    </div>
  )
}
export default Less
