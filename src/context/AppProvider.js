import React, { createContext, useState } from 'react'
export const AppContext = createContext()
// Create a provider component

export const AppProvider = ({ children }) => {
  const [studentPackage, setStudentPackage] = useState()
  return (
    <AppContext.Provider value={{ studentPackage, setStudentPackage }}>
      {children}
    </AppContext.Provider>
  )
}
