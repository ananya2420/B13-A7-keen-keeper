import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/Routes'
import KeeperProvider from './context/keeperContext'





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <KeeperProvider>
       <RouterProvider router={router} />
     </KeeperProvider>
       
   
     
  </StrictMode>,
)
