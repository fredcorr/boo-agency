import { useContext, createContext, ReactNode } from 'react'
import { CMSSettings } from '_types/cms'


export const SettingsContext = createContext<CMSSettings>({})

export interface SettingsContextProps {
  items: CMSSettings
  children: ReactNode
}

export const SettingsProvider = ({ items, children }: SettingsContextProps) => {
  return (
    <SettingsContext.Provider value={items}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
