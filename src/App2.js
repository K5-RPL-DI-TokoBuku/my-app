/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import routes from './Config/routes';
import { isUserAuthenticated } from './utils/cookie';
import {Header} from './Component'
// import {useSelector} from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserAuthenticated()) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

const App = () => {
  // const cart = useSelector((state) => state.userReducer.userCart);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((route) => {
          if (route.isPublic) {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          }

          // if (route.path === '/dasboard' && !isAdmin() ){
          //   return (
          //     <Route 
          //       path={'/'}
          //       component={Home}
          //       key={'/'}  />
          //   )
          // }

          return (
            <PrivateRoute
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
