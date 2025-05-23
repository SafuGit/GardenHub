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
import BrowseTips from './components/BrowseTips/BrowseTips'
import TipDetails from './components/TipDetails/TipDetails'
import NotFound from './components/NotFound/NotFound'
import MyTips from './components/MyTips/MyTips'
import Loading from './components/Loading/Loading'

const router = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {index: true, Component: Home},
    {path: '/login', Component: Login},
    {path: '/register', Component: Register},
    {
      path: '/shareTip', 
      element: <PrivateRoute>
        <ShareTip></ShareTip>
      </PrivateRoute>,
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/browseTips',
      Component: BrowseTips,
      loader: () => fetch('http://localhost:3000/tips/public'),
    },
    {
      path: 'tips/:id',
      Component: TipDetails,
      loader: async ({params}) => fetch(`http://localhost:3000/tips/${params.id}`),
    },
    {
      path: '/myTips',
      Component: MyTips,
    }
  ]},
  {
    path: '*',
    Component: NotFound,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
