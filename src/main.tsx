import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <PayPalScriptProvider options={{ "clientId": "ASHzEueuAORaok9to6A_Vx2t1a15207Mu2ZPzfrb2SK37tcmHL3NNMN6-adJaPEIJv_mY5gxy2x5gJbz", vault: true, intent: "subscription" }}>
      <App />
    </PayPalScriptProvider>
    </BrowserRouter>
  </StrictMode>
)
