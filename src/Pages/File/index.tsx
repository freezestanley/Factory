import React from 'react'
import Style from './index.style.less'
import Image from '@/Components/Image'
import FileNesting from './assets/imgs/filernesting.png'
const File = () => {
  return (
    <div className={Style.File}>
      <h1>项目文件结构</h1>
      <h3>filer nesting</h3>
      <Image src={FileNesting} />
      <p>基于vscode extensions filer nesting</p>
      <h3>global.less全局样式</h3>
      <p>src/global.less设置项目全局样式</p>
      <h3>Project Theme设置</h3>
      <p></p>
    </div>
  )
}
export default File
