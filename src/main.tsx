import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <PayPalScriptProvider options={{ "clientId": "sb", currency: "USD" }}>
      <App />
    </PayPalScriptProvider>
    </BrowserRouter>
  </StrictMode>
)
