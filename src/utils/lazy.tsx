import React from 'react'

const Lazy = function (path: string): any {
  const element = React.lazy(() => import(path))
  return <React.Suspense fallback={<div>load</div>}>{element}</React.Suspense>
}

export default Lazy
