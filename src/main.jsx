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
import UpdateTips from './components/UpdateTips/UpdateTips'
import ExploreGardeners from './components/ExploreGardeners/ExploreGardeners'
import Dashboard from './components/Dashboard/Dashboard'
import Overview from './components/Dashboard/Overview/Overview'

const router = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {index: true, Component: Home},
    {path: '/login', Component: Login},
    {path: '/register', Component: Register},
    {
      path: '/dashboard', Component: Dashboard, children: [
        {
          index: true, 
          element: <PrivateRoute>
            <Overview></Overview>
          </PrivateRoute>,
          loader: async () => {
            const gardenersPromise = fetch('https://gardenhub-server-nine.vercel.app/gardeners').then(res => res.json());
            const tipsPromise = fetch('https://gardenhub-server-nine.vercel.app/tips/public').then(res => res.json());

            const [gardeners, tips] = await Promise.all([gardenersPromise, tipsPromise]);

            let likes = 0;
            for (const tip of tips) {
              likes += tip.totalLikes;
            }

            return {
              gardenersCount: gardeners.length,
              tipsCount: tips.length,
              totalLikes: likes,
            };
          }
        },

      ]
    },
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
      loader: () => fetch('https://gardenhub-server-nine.vercel.app/tips/public'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: 'tips/:id',
      Component: TipDetails,
      loader: async ({params}) => fetch(`https://gardenhub-server-nine.vercel.app/tips/${params.id}`),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/myTips',
      element: <PrivateRoute>
        <MyTips></MyTips>
      </PrivateRoute>
    },
    {
      path: 'updateTips/:id',
      Component: UpdateTips,
      loader: async ({params}) => fetch(`https://gardenhub-server-nine.vercel.app/tips/${params.id}`),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/gardeners',
      Component: ExploreGardeners,
      loader: () => fetch('https://gardenhub-server-nine.vercel.app/gardeners'),
      hydrateFallbackElement: <Loading></Loading>
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
