
import loadable from './loadable';
const Login = loadable(()=>import('@/views/login/Login'))
const Home = loadable(()=>import('@/views/home/Home'))
const Rooms = loadable(()=>import('@/views/rooms/Rooms'))
const Host = loadable(()=>import('@/views/host/Host'))
const MyCat = loadable(()=>import('src/views/myCat/MyCat'))
const Adopt = loadable(()=>import('src/views/adopt/Adopt'))
const Board = loadable(()=>import('src/views/board/Board'))
const Extend = loadable(()=>import('src/views/extend/Extend'))
const Activity = loadable(()=>import('src/views/activity/Activity'))


export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: '/host',
    component: Host
  },
  {
    path: '/myCat',
    component: MyCat
  },
  {
    path: '/adopt',
    component: Adopt
  },
  {
    path: '/board',
    component: Board
  },
  {
    path: '/extend',
    component: Extend
  },
  {
    path: '/activity',
    component: Activity
  },
  {
    path: "/rooms",
    component: Rooms,
    // routes: [
    //   {
    //     path: "/rooms/bus",
    //     component: Bus
    //   },
    //   {
    //     path: "/rooms/cart",
    //     component: Cart
    //   }
    // ]
  }
];