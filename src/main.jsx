import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import bookStore from './Redux/bookStore.js'

BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store ={bookStore}>
        <App />
      </Provider>
      
    </BrowserRouter>
    
  </StrictMode>,
)
