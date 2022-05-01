import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface AuthContextType {
  user: boolean
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}
let AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let location = useLocation()
  let [user, setUser] = React.useState<any>(false)

  useEffect(() => {
    //监听页面变化后做点什么
    console.log(`location: ${JSON.stringify(location)}`)
  }, [location])

  let signin = (newUser: string, callback: VoidFunction) => {
    return new Promise((): void => {
      setUser(newUser)
      callback()
    })
  }

  let signout = (callback: VoidFunction) => {
    return new Promise((): void => {
      setUser(null)
      callback()
    })
  }

  let value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return React.useContext(AuthContext)
}
export function RequireAuth({
  children,
  authFail = '/login'
}: {
  children: React.ReactElement
  authFail?: string
}) {
  let auth = useAuth()
  let location = useLocation()
  if (!auth?.user) {
    return <Navigate to={authFail} state={{ from: location }} replace />
  } else {
    return children
  }
}
