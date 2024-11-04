/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/list/List'
import Stats from './pages/Stats/Stats'
import Orders from  './pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const url  = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path ="/add" element={<Add url={url}/>}/>
          <Route path ="/list" element={<List url={url}/>}/>
          <Route path ="/orders" element={<Orders url={url}/>}/>
          <Route path ="/Stats" element={<Stats url={url}/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default App
