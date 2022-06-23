import React from 'react'
import Style from './index.less'

const Mono = () => (
  <div className={Style.mono}>
    <h1>Monorepo</h1>
    <pre>
      <code>packages 子包</code>
    </pre>
  </div>
)

export default Mono
