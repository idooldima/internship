import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/home.component';
import SignIn from './pages/home/auth/signIn/signIn.component';
import SignUp from './pages/home/auth/signUp/signUp.component';
import Header from './pages/home/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<div>404!!!</div>} />
        <Route path="/" element={<Home />} />
      </Routes>
      <SignUp></SignUp>
      <SignIn></SignIn>
    </div>
  );
}

export default App;
