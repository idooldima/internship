import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


import './App.scss';
import Home from './pages/home';
import SignUp from './pages/home/auth/signUp';
import Header from './pages/home/header';
import Main from './pages/home/main';

function App() {
  return (
    <div className="App"  >
      {/* <Header></Header> */}
      {/* <Main></Main> */}
      <Home></Home>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
