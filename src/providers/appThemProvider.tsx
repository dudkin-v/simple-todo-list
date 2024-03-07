import { FC, PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const them = createTheme({})

const AppThemProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={them}>{children}</ThemeProvider>
  )
}

export default AppThemProvider
