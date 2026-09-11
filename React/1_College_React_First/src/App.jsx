import React from 'react'
import UserLayout from '../pages/UserLayout'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="mycart" element={<h1>my cart</h1>}/>
        <Route path="myorder" element={<h1>my order</h1>}/>
        <Route path="setting" element={<h1>setting</h1>}/>
        <Route path="myprofile" element={<h1>my profile</h1>}/>
        <Route path="logout" element={<h1>my cart</h1>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App