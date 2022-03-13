declare module '*.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}

declare module '*.sass' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.sass'
}

declare module '*.scss' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.scss'
}
