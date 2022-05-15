import { lazy } from '@loadable/component'
export const AsyncGrally = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Grally",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Grally`
    )
)
export const AsyncImmer = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Immer",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Immer`
    )
)
export const AsyncBook = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Book",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Book`
    )
)
export const AsyncShop = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Shop",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Shop`
    )
)
export const AsyncTeam = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Team",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Team`
    )
)
