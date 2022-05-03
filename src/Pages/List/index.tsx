import React from 'react'
import Style from './index.style.less'
import { useNavigate } from 'react-router-dom'
import Image from '@/Components/Image'
import Logo from './logo.png'
const item: { label?: string; link: string; descript?: string }[] = [
  { label: 'Immer', link: '/immer', descript: '使用Immer不可变数据' },
  { label: 'File', link: '/file', descript: '项目文件结构' },
  { label: 'Request', link: '/request', descript: '' }
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
      <hr />
      <h1>样式设置</h1>
      <h3>css-loader mode: global local</h3>
      <p>
        当文件路径下global或是文件名还有global的样式文件会按global模式编译其他的为local模式
      </p>
      <h3>global.less全局样式</h3>
      <p>src/global.less设置项目全局样式</p>
      <h3>Project Theme设置</h3>
      <hr />

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
      <hr />
      <h1>Layer</h1>
      <h3>{`src/router`}</h3>
      <p>asdf</p>
      <h1>Auth</h1>
      <h3>{`src/router/Auth`}</h3>
      <p>基于Provider在router通过</p>
      <pre>
        <code>{`<RequireAuth> //鉴权
  <React.Suspense fallback={<Loading />}>
  // react lazy 按需加载
    <AsyncShop />
  </React.Suspense>
</RequireAuth>`}</code>
      </pre>
      <hr />
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
      '@P/Immer'
    )
)`}</code>
      </pre>

      <a href="https://www.npmjs.com/package/@loadable/component">
        @loadable/component
      </a>
    </div>
  )
}
export default List
