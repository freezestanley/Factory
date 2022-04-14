import { lazy } from '@loadable/component'

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
export const AsyncAsset = lazy(
  () =>
    import(
      /*
      webpackChunkName: "Asset",
      webpackPrefetch: true,
      webpackPreload: true
      */
      `@P/Asset`
    )
)
