import React from 'react'
import Style from './index.style.less'
const Other = () => {
  return (
    <div className={Style.Other}>
      <h1>Image</h1>
      <h3>load-image-component</h3>
      <p>{`src / component-- > Image`}</p>
      <p>
        IntersectionObserver
        <br />
        placeholderSrc
        <br />
        <a href="https://www.npmjs.com/package/react-lazy-load-image-component">
          react-lazy-load-image-component
        </a>
      </p>
      <h1>Layer</h1>
      <h3>{`src/router`}</h3>
      <p>asdf</p>
      <h1>Auth</h1>
      <h3>{`src/router/Auth`}</h3>
      <p>基于Provider在router通过</p>
      <pre>
        <code>{`<RequireAuth> //鉴权
  <React.Suspense fallback={<Loading />}> // react lazy 按需加载
    <AsyncShop />
  </React.Suspense>
</RequireAuth>`}</code>
      </pre>
      <h1>lazy load</h1>
      <h3>{`src/router/Async`}</h3>
      <p>基于@loadable/component</p>
      <pre>
        <code>{`import { lazy } from '@loadable/component'
export const AsyncImmer = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Immer",
      webpackPrefetch: true,
      webpackPreload: true
      */
      '@/Pages/Immer'
    )
)`}</code>
      </pre>

      <a href="https://www.npmjs.com/package/@loadable/component">
        @loadable/component
      </a>
    </div>
  )
}
export default Other
