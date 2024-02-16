import './App.css';
import { Login } from './components/SignInSignUp';
import {BrowserRouter as Router,Route,Navigate,Routes} from 'react-router-dom';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import { Quote } from './components/Quote';
import { Signout } from './components/Signout';
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/auth/login' element={<Login />}></Route>
        <Route path='/home' element={<div className='home-div'> 
                                                    <div className='home-div-header'>
                                                        <Quote /> <Signout /> 
                                                    </div>
                                                    <div className='home-div-main'>
                                                      <RecoilRoot ><CreateTodo /> <Todos /></RecoilRoot>
                                                    </div>
                                                    </div>}></Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" replace/>} />
      </Routes>
    </Router>
  )
}

export default App
