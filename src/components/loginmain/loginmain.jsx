import React from 'react'
import { Route, Routes,Navigate, Link } from 'react-router-dom';
import AppLogin from '../../pages/login/login';
import Register from '../../pages/registration/register';

export default function Loginmain() {


  return (
    <div>
        <Routes>
	        <Route path={"*"} element={<Navigate to={'/login'}/>}/>
            <Route path={"/login"} element={<AppLogin/>}/>
            <Route path={"/register"} element={<Register/>}/>
        </Routes>
    </div>
  )
}
