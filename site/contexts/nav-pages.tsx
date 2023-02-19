import { useContext, createContext, ReactNode } from 'react'
import { CMSPage } from '_types/cms'


export const NavPagesContext = createContext<CMSPage[]>([])

export interface NavPagesProps {
  items: CMSPage[]
  children: ReactNode
}

export const NavPagesProvider = ({ items, children }: NavPagesProps) => {
  return (
    <NavPagesContext.Provider value={items}>
      {children}
    </NavPagesContext.Provider>
  )
}

export const useNavPages = () => useContext(NavPagesContext)
