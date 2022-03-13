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

interface MyWindow extends Window {
  abc(): void
}

declare var window: MyWindow
