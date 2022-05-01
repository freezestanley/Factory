import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { useOutletContext, Outlet } from 'react-router-dom'
import classNames from 'classnames/bind'
import Style from './index.less'

let cx = classNames.bind(Style)

const Layer = (type: {
  children?: React.ReactElement
  header?: React.ReactElement
  footer?: React.ReactElement
}) => {
  const stageRef = useRef<HTMLDivElement>(null!)
  const [headerDisplay, setHeaderDisplay] = useState<boolean>(true)
  const [footerDisplay, setFooterDisplay] = useState<boolean>(true)
  const [headTitle, setHeadTitle] = useState<string>('123456')
  const [scolltop, setScrolltop] = useState<Event>()
  const stageScrollEvent = function (callback: Function) {
    if (scolltop) {
      callback(scolltop)
    }
  }

  const scrollHandler: EventListener = useCallback((event: Event) => {
    setScrolltop(event)
  }, [])
  useLayoutEffect(() => {
    let stage = stageRef?.current
    stageRef?.current.addEventListener('scroll', scrollHandler)
    return () => {
      stage.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollHandler])
  return (
    <div className={Style.Layer}>
      <div>
        {headerDisplay && type.header
          ? React.cloneElement(type.header, { title: headTitle })
          : null}
      </div>
      <div ref={stageRef}>
        {type.children}
        <Outlet
          context={[
            headerDisplay,
            setHeaderDisplay,
            footerDisplay,
            setFooterDisplay,
            headTitle,
            setHeadTitle,
            stageScrollEvent
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
  setHeadTitle: Function,
  stageScrollEvent: Function
]
export function useLayer() {
  return useOutletContext<ContextType>()
}
