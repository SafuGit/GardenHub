import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root'
import Home from './components/Home/Home'
import AuthProvider from './contexts/AuthProvider'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ShareTip from './components/ShareTip/ShareTip'
import PrivateRoute from './layout/PrivateRoute'

const router = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {index: true, Component: Home},
    {path: '/login', Component: Login},
    {path: '/register', Component: Register},
    {
      path: '/shareTip', 
      element: <PrivateRoute>
        <ShareTip></ShareTip>
      </PrivateRoute>
    }
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
