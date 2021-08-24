import React from 'react'
import { Route, Switch, BrowserRouter, Redirect  } from 'react-router-dom';
import { isUserAuthenticated } from './utils/cookie';
import {Header} from './Component'
import routes from './Config/routes';
import './App.css';

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
  )
}

export default App
