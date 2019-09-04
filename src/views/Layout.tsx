import React from "react";
import {  Route } from 'react-router-dom'
import { routes } from '@/routers/RouteConfig'
import Footer from '@/components/Footer'
import Menus from '@/components/Menus'
export default  function Layout() {
  return (
  <div>
    <Menus />
    {routes.map((route, i) => <Route key={i} path={route.path} component={route.component} exact={route.exact}/>)}
    <Footer />
  </div>
  );
}