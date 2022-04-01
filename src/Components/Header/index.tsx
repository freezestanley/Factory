import React from 'react'
type HeaderType = {
  title?: string
}
const Header = (props: HeaderType) => <div>{props.title}</div>
export default React.memo(Header)
