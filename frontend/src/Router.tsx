import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import axios from 'axios';

import Profile from './routes/Profile';
import Intro from './components/Intro';
function Router() {
  const accessToken = localStorage.getItem('access_token');
  const sendTokenToBackend = () => {
    axios
      .post('http://localhost:8080/api/auth/user', {
        token: localStorage.getItem('access_token'),
      })
      .then((res) => {
        console.log(res);
        /*서버측에 토큰을 전달해서 사용자 데이터를 받아와 라우터 컴포넌트에 뿌려준다 */
        /*수정필요 */
      });
  };
  useEffect(() => {
    // sendTokenToBackend();
  }, [accessToken]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">{accessToken ? <Home /> : <Intro />}</Route>
      </Switch>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
