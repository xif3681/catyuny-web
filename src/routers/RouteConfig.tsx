

import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from '@/views/home/Home';
// import Host from '@/views/host/Host';
// import Rooms from '@/views/rooms/Rooms';
// import Login from '@/views/login/Login';
import loadable from './loadable';
const Login = loadable(()=>import('@/views/login/Login'))
const Home = loadable(()=>import('@/views/home/Home'))
const Rooms = loadable(()=>import('@/views/rooms/Rooms'))
const Host = loadable(()=>import('@/views/host/Host'))


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