import React, { useEffect, useState, useLayoutEffect } from 'react'
import Cookies from 'js-cookie'
import darkTheme from './variables/dark'
import lightTheme from './variables/light'

export const enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}
export interface ThemeContextType {
  theme: THEME
  setTheme: Function
}

let ThemeContext = React.createContext<ThemeContextType>(null!)
function setRoot(param: string): void {
  let theme = lightTheme
  if (param === 'light') {
    theme = lightTheme
  } else if (param === 'dark') {
    theme = darkTheme
  }
  let adf: { [key: string]: string } = { ...theme }
  for (let i in adf) {
    document.documentElement.style.setProperty(i, adf[i])
  }
}
export function ThemeProvider({
  children,
  container = document.documentElement,
  defaultTheme = THEME.LIGHT
}: {
  children: React.ReactNode
  container?: HTMLElement | Document['documentElement'] | null
  defaultTheme?: THEME
}) {
  const [theme, setTheme] = useState<THEME>(defaultTheme)
  useLayoutEffect(() => {
    if (container) {
      if (theme === 'light') {
        container.classList.add('is-light')
        container.classList.remove('is-dark')
      } else if (theme === 'dark') {
        container.classList.add('is-dark')
        container.classList.remove('is-light')
      }
      setRoot(theme)
      Cookies.set('theme', theme, { expires: 7, path: '/' })
    }
    return () => {
      Cookies.remove('theme')
    }
  }, [container, theme])

  let value = { theme, setTheme }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export function useTheme() {
  return React.useContext(ThemeContext)
}
