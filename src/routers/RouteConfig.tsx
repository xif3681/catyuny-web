
import loadable from './loadable';
const Login = loadable(()=>import('@/views/login/Login'))
const Home = loadable(()=>import('@/views/home/Home'))
const Rooms = loadable(()=>import('@/views/rooms/Rooms'))
const Host = loadable(()=>import('@/views/host/Host'))
const MyCat = loadable(()=>import('src/views/myCat/MyCat'))


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