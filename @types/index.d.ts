declare module '*.jpg'
declare module '*.jpeg'
declare module '*.css' {
  const value: string
  export default value
}
declare module '*.png' {
  const value: string
  export default value
}

declare module '*.svg' {
  /* eslint-disable */
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement
  const url: string
  export default url
}

interface Window {
  BUILD: string
  VConsole: function
  location: string
  Mode: string
}

declare let module: {
  hot?: { accept: function }
}
declare const Mode: string
declare let module: {
  hot?: { accept: function }
}
