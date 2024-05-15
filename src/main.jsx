import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/fonts/DINNextRoundedLTPro-Regular/style.css'
import './assets/fonts/DINNextRoundedLTPro-Bold/style.css'
import './assets/fonts/DINNextRoundedLTPro-Medium/style.css'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='417047348372-du03ge9shcub7fb0l8d0c4sh345k447u.apps.googleusercontent.com'>
      <App/>
    </GoogleOAuthProvider>    
  </React.StrictMode>,
)
