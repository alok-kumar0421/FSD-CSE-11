import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/mycart">My cart</Link>
      <Link to="/myorder">My Order</Link>
      <Link to="/setting">Setting</Link>
      <Link to="/myprofile">my profile</Link>
      <Link to="/setting">Setting</Link>
      <Link to="/logout">Log Out</Link>

    </div>
  )
}
export default Navbar
