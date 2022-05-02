import React from 'react'
import Style from './index.style.less'
import { useNavigate } from 'react-router-dom'
import Image from '@/Components/Image'
import Logo from './logo.png'
const item: { label?: string; link: string; descript?: string }[] = [
  { label: 'Style', link: '/', descript: '样式管理:global local' },
  { label: 'Immer', link: '/', descript: '' },
  { label: 'Theme', link: '/', descript: '' },
  { label: 'File', link: '/', descript: '' },
  { label: 'Request', link: '/', descript: '' },
  { label: 'Layer', link: '/', descript: '' }
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
