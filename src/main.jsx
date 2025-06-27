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
import { BiPhone } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import Swal from 'sweetalert2'

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
        {
          path: '/dashboard/myTips',
          element: <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        },
        {
          path: '/dashboard/shareTip', 
          element: <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>,
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: '/dashboard/browseTips',
          Component: BrowseTips,
          loader: () => fetch('https://gardenhub-server-nine.vercel.app/tips/public'),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: '/dashboard/tips/:id',
          Component: TipDetails,
          loader: async ({params}) => fetch(`https://gardenhub-server-nine.vercel.app/tips/${params.id}`),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: '/dashboard/updateTips/:id',
          Component: UpdateTips,
          loader: async ({params}) => fetch(`https://gardenhub-server-nine.vercel.app/tips/${params.id}`),
          hydrateFallbackElement: <Loading></Loading>
        },
      ]
    },
    {
      path: '/gardeners',
      Component: ExploreGardeners,
      loader: () => fetch('https://gardenhub-server-nine.vercel.app/gardeners'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/aboutUs',
      Component: () => <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="bg-base-200 border border-green-200 p-6 md:p-10 rounded-2xl shadow-md">
          <p className="text-lg leading-relaxed">
            <strong>GardenHub</strong> is a vibrant community platform where gardeners of all levels connect, share tips,
            and inspire growth. From urban balconies to sprawling backyards, our mission is to cultivate knowledge,
            creativity, and a passion for sustainable gardening. Whether you’re a seasoned expert or just planting your
            first seed, GardenHub is your trusted companion in every step of your green journey.
          </p>
        </div>
      </div>
    },
    {
      path: '/contactUs',
      Component: () => <div className='w-[95vw] mx-auto'>
        <h1 className='text-4xl mb-8'>About Us</h1>
        <div className='flex gap-4'>
          <div className='card bg-base-200 shadow-xl p-8 w-fit'>
            <h1 className='card-title text-2xl mb-4'>Give us a call</h1>
            <p className='flex items-center gap-2'><BiPhone></BiPhone> +8801981575920 <br /> +8801710888010</p>
          </div>
          <div className='card bg-base-200 shadow-xl p-8 w-fit'>
            <h1 className='card-title text-2xl truncate mb-4'>Or Contact through Email</h1>
            <p className='flex items-center gap-2'><CgMail></CgMail> @safwan55.ah@gmail.com <br /> @safwansadid.ah@gmail.com</p>
          </div>
          <div className='card bg-base-200 shadow-xl p-8 w-full'>
            <h1 className='card-title text-2xl mb-2'>Give us some feedback!</h1>
            <textarea className='input rounded-xl w-full mb-4'></textarea>
            <button className='btn btn-primary w-fit' onClick={() => {
              Swal.fire({
                title: 'Thank you for your feedback!',
              })
            }}>Submit</button>
          </div>
        </div>
      </div>
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
