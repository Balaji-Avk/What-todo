import './App.css';
import { Login } from './components/SignInSignUp';
import {BrowserRouter as Router,Route,Navigate,Routes} from 'react-router-dom';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import { Quote } from './components/Quote';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/auth/login' element={<Login />}></Route>
        <Route path='/home' element={<div className='home-div'> 
                                                    <div className='home-div-header'>
                                                        <Quote /> 
                                                    </div>
                                                    <div className='home-div-main'>
                                                      <CreateTodo /> <Todos />
                                                    </div>
                                                    </div>}></Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  )
}

export default App
