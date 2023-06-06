import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App/App.tsx'
import BlogContextProvider from './contexts/BlogContext.tsx'
import moment from 'moment'
import 'moment/dist/locale/pt-br'

import './global.scss'

moment.locale('pt-br')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
