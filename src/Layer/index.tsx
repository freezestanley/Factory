import React, { useState } from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  useOutletContext,
  Outlet
} from 'react-router-dom'
import classNames from 'classnames/bind'
import Style from './index.less'

let cx = classNames.bind(Style)
type layerType = {
  children?: React.ReactElement
  header?: React.ReactElement
  footer?: React.ReactElement
}
const Layer = (type: layerType) => {
  const [headerDisplay, setHeaderDisplay] = useState<boolean>(true)
  const [footerDisplay, setFooterDisplay] = useState<boolean>(true)
  const [headTitle, setHeadTitle] = useState<string>('123456')
  return (
    <div className={Style.Layer}>
      <div>
        {headerDisplay && type.header
          ? React.cloneElement(type.header, { title: headTitle })
          : null}
      </div>
      <div>
        {type.children}
        <Outlet
          context={[
            headerDisplay,
            setHeaderDisplay,
            footerDisplay,
            setFooterDisplay,
            headTitle,
            setHeadTitle
          ]}
        />
      </div>
      <div>{footerDisplay && type.footer ? type.footer : null}</div>
    </div>
  )
}
export default Layer

type ContextType = [
  headerDisplay: boolean,
  setHeaderDisplay: Function,
  footerDisplay: boolean,
  setFooterDisplay: Function,
  headTitle: string,
  setHeadTitle: Function
]
export function useLayer() {
  return useOutletContext<ContextType>()
}
