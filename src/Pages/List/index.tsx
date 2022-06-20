import React, { useContext } from 'react'
import Style from './index.style.less'
import { useNavigate, useMatch, renderMatches } from 'react-router-dom'
import Image from '@/Components/Image'
import Logo from './logo.png'
import { useTheme, THEME } from '@/Theme'
import create from 'zustand'
import produce from 'immer'

const item: { label?: string; link: string; descript?: string }[] = [
  {
    label: 'Immer',
    link: '/immer/others/123',
    descript: '使用Immer不可变数据'
  },
  { label: 'Grally', link: '/grally', descript: '图库' },
  { label: 'File', link: '/file', descript: '项目文件结构' },
  { label: 'Formily', link: '/Formily', descript: 'formily' }
]

type zustandType = {
  bears: number
  increasePopulation: () => any
  removeAllBears: () => any
}
const useStore = create<zustandType>((set, get) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: get().bears - 1 })
  // fetch: async (pond) => {
  //   const response = await fetch(pond)
  //   set({ fishies: await response.json() })
  // }
}))

type Getter<T> = {
  [K in keyof T as `im${string & K}`]: T[K]
}

type zustandImType = Getter<zustandType>

const useImmerStore = create<zustandImType>((set, get) => ({
  imbears: 0,
  imincreasePopulation: () =>
    set(
      produce((state: { imbears: number }) => ({ imbears: state.imbears + 1 }))
    ),
  imremoveAllBears: () =>
    set(
      produce((state: { imbears: number }) => ({ imbears: state.imbears - 1 }))
    )
}))

const List = () => {
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()
  const { bears, increasePopulation, removeAllBears } = useStore(
    (state) => state
  )

  const { imbears, imincreasePopulation, imremoveAllBears } = useImmerStore(
    (state) => state
  )
  const af = useMatch('/immer/others/123')
  console.log(JSON.stringify(af))
  debugger
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
      <h1>zustand</h1>
      <div>zustand async</div>
      <pre>
        <code>
          {`fetch: async (pond) => {
            const response = await fetch(pond)
            set({ fishies: await response.json() })
          }`}
        </code>
      </pre>
      <div>
        <button onClick={increasePopulation}>+</button>
        <span>{bears}</span>
        <button onClick={removeAllBears}>-</button>
      </div>
      <div>zustand immer</div>
      <div>
        <button onClick={imincreasePopulation}>+</button>
        <span>{imbears}</span>
        <button onClick={imremoveAllBears}>-</button>
      </div>
      <hr />
      <h1>Sentry</h1>
      <p>
        接入Sentry修改src/index.tsx
        <br />
        .sentryclirc修改配置
        <br />
        修改webpack.prd.config.js sentry plugins
      </p>
      <hr />
      <h1>缓存</h1>
      <h3>PWA</h3>
      <p>
        只在生产环境生效
        <br />
        js: 'NetworkFirst'
        <br />
        html|css|png|jpg: StaleWhileRevalidate
        <br />
        /api/: 'NetworkFirst'
      </p>
      <hr />
      <h1>Toolbox</h1>
      <h3>数据持久化 -- goDB</h3>
      <pre>
        <code>
          {`const user = dataDb?.table('user')
let a1 = await user.add({
  name: 'xxx',
  age: 'fsdfasd'
})
let b1 = await user.get(a1.id)
console.log(b1)`}
        </code>
      </pre>
      <h3>请求-- request</h3>
      <p>useRequest+umi-request，暴露出一个Frequest实例，</p>
      <h3>debugger</h3>
      <p>url=a?vconsole=true 将开启vconsole</p>
      <hr />
      <h1>样式设置</h1>
      <h3>css-loader mode: global local</h3>
      <p>
        当文件路径下global或是文件名还有global的样式文件会按global模式编译其他的为local模式
      </p>
      <h3>global.less全局样式</h3>
      <p>src/global.less设置项目全局样式</p>
      <h3>Project Theme设置</h3>
      <div>
        <button onClick={() => setTheme(THEME.LIGHT)}>Light</button>
        <button onClick={() => setTheme(THEME.DARK)}>Dark</button>
      </div>
      <div className={Style.box}>{theme}box</div>
      <p>
        参见src/Theme
        <br />
        ThemeProvider 接收3个属性
        <br />
        1.children
        <br />
        2.container 默认为document.documentElement
        <br />
        3.defaultTheme默认为 THEME.LIGHT
        <br />
      </p>
      <pre>
        <code>{`export const enum THEME{
          LIGHT = 'light',
          DARK = 'dark'}
          `}</code>
      </pre>
      <div>useTheme</div>
      <pre>
        <code>{`import { useTheme, THEME } from '@/Theme'
const {(theme, setTheme)} = useTheme()`}</code>
      </pre>
      <div>根据Theme自定义样式</div>
      <pre>
        <code>{`:global(.is-light) {
  .List .box {
    background: #000;
  }
}
:global(.is-dark) {
  .List .box {
    background: #f00;
    width: 300px;
    height: 300px;
  }
}
`}</code>
      </pre>
      <div>var(变量,默认值)</div>
      <pre>
        <code>background: var(--header-bg, #fcc);</code>
      </pre>
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
      <p>
        采取分类模版的概念
        <br />
        Layer对应的title+menu布局的模版
        <br />
        基于useOutletContext
        <br />
        headerDisplay —— 头部显示状态
        <br />
        setHeaderDisplay —— 控制头部显示
        <br />
        footerDisplay —— 底部显示状态
        <br />
        setFooterDisplay —— 控制底部显示
        <br />
        headTitle —— 获取title
        <br />
        setHeadTitle —— 控制title
        <br />
        stageScrollEvent —— 获取stage滚动
      </p>
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
      '@/Pages/Immer'
    )
)`}</code>
      </pre>

      <a href="https://www.npmjs.com/package/@loadable/component">
        @loadable/component
      </a>
      <hr />
      <h1>Sentry</h1>
      <p>
        接入Sentry修改src/index.tsx
        <br />
        .sentryclirc修改配置
        <br />
        修改webpack.prd.config.js sentry plugins
      </p>
    </div>
  )
}
export default List
