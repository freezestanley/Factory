import React from 'react'
import { To, useNavigate } from 'react-router-dom'
import Style from './index.less'
type HeaderType = {
  title?: string
}
const Header = (props: HeaderType) => {
  let navigate = useNavigate()
  // const jump = <T>(path:T): void => {
  //   navigate(path, { state: { name: '1231' } })
  // }
  const jump = <T,>(path: T) => {
    navigate(path, { state: { name: '1231' } })
  }
  return (
    <div className={Style.header}>
      <div>
        <span
          className={`${Style.back}  iconfont if-audit`}
          onClick={() => jump(-1)}
        ></span>
      </div>
      <div>{props.title}</div>
      <div>
        <span
          className={`${Style.home} iconfont if-appstore`}
          onClick={() => jump('/')}
        ></span>
      </div>
    </div>
  )
}
export default React.memo(Header)
