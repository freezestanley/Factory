import React, { useState } from 'react'
import Cookies from 'js-cookie'
import Dark from './variables/dark'
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
function setRoot() {
  document.documentElement.style.setProperty('--header-bg', '#F00')
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
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT)
  if (container) {
    if (theme === 'light') {
      container.classList.add('is-light')
      container.classList.remove('is-dark')
    } else if (theme === 'dark') {
      container.classList.add('is-dark')
      container.classList.remove('is-light')
    }
    Cookies.set('theme', theme, { expires: 7, path: '/' })
  }
  let value = { theme, setTheme }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export function useTheme() {
  return React.useContext(ThemeContext)
}
