import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppThemProvider from './providers/appThemProvider.tsx'
import store from './store'
import App from './App.tsx'
import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppThemProvider>
        <App />
      </AppThemProvider>
    </Provider>
  </BrowserRouter>
)
