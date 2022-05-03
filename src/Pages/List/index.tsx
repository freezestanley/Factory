import React from 'react'
import Style from './index.style.less'
import { useNavigate } from 'react-router-dom'
import Image from '@/Components/Image'
import Logo from './logo.png'
const item: { label?: string; link: string; descript?: string }[] = [
  { label: 'Style', link: '/less', descript: '样式管理:global local' },
  { label: 'Immer', link: '/immer', descript: '使用Immer不可变数据' },
  { label: 'File', link: '/file', descript: '项目文件结构' },
  { label: 'Request', link: '/request', descript: '' },
  { label: 'Layer', link: '/layer', descript: '' },
  { label: 'Other', link: '/other', descript: '' }
]
const List = () => {
  let navigate = useNavigate()
  return (
    <div className={Style.List}>
      <Image src={Logo} className={Style.logo} />
      <ul>
        {item.map((ele, idx) => {
          return (
            <li key={`${ele.label}`} onClick={(ev) => navigate(ele.link)}>
              <div>{ele.label}</div>
              <div className={Style.descript}>{ele.descript}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default List
