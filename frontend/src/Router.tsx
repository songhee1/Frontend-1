import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NaverLogin from './NaverLogin';
import Home from './routes/Home';
import MainPage from './routes/MainPage';
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mainpage">
          <MainPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
