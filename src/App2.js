/* eslint-disable react/jsx-props-no-spreading */
import React,{useEffect} from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import routes from './Config/routes';
import { isUserAuthenticated } from './utils/cookie';
import Header from './Component/Header'
import {useSelector, useDispatch} from 'react-redux'
import { getUserCart } from "./store/action/index";


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
	const dispatch = useDispatch();
  const cart = useSelector((state) => state.userReducer.userCart);


	useEffect(() => {
		dispatch(getUserCart())
	}, [dispatch]);


  return (
    <BrowserRouter>
      <Header cart={cart} />
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
  );
};

export default App;
