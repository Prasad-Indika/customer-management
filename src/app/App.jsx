import { useEffect, useState } from 'react'
import MainNavigations from '../components/main/mainnavigation'
import AppLogin from '../pages/login/login'
import Register from '../pages/registration/register'
import Loginmain from '../components/loginmain/loginmain'
import './App.css'

function App() {

 const [loginStatus,setStates] = useState(false)

 useEffect(() => {
  if (localStorage.getItem('login') !== null){
    setStates(true);
  }else {
    setStates(false);
  }
}, []);

  return (
    <>
      {loginStatus ?
             (<MainNavigations/>)
             :
             (<Loginmain/>)

      }
    </>
  )
}

export default App
