import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import NaverLogin from './NaverLogin';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
