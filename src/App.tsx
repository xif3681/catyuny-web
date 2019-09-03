import React from 'react';
import './App.css';
// import { BrowserRouter, NavLink, Redirect, Route, Switch, Router } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
// import { LocaleProvider } from 'antd'
// import zhCN from 'antd/lib/locale-provider/zh_CN'
import { routes } from '@/routers/RouteConfig'
import Footer from '@/components/Footer'

const App: React.FC = () => {
  return (
    <div className="App">


      <BrowserRouter>
        {/* <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/host">host</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">rooms</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
          </ul>
        </nav> */}
       
        {routes.map((route, i) => <Route key={i} path={route.path} component={route.component} exact={route.exact}/>)}
        <Footer />
        {/* <LocaleProvider locale={zhCN}>
          <Switch>
            <Redirect exact={true} from='/' to='home' />
            {routes.map((route, i) => <Route key={i} path={route.path} component={route.component} />)}
          </Switch>
        </LocaleProvider> */}
      </BrowserRouter>

    </div>

  );
}

export default App;

