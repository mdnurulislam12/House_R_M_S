import React, { useState } from 'react'
import {IconButton} from "@mui/material"
import {Person, Search,Menu} from "@mui/icons-material"
import{useSelector, useDispatch} from "react-redux"
import "../../styles/navbar.scss"
import { Link, useNavigate } from 'react-router-dom'
import { setLogout } from '../../redux/state'

function Navbar() {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const user = useSelector((state)=>state.user);

  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  return (
    <div className="navbar">
        <a href="/"><img src="../public/assets/logo.png" alt="logo" /></a>

        <div className="navbar_search">
            <input type="text" placeholder='search...' />
            <IconButton>
                <Search className='navbar_search_seicon' />
            </IconButton>
        </div>
        
        <div className="navbar_right">
          {user ? (<a href='/create-listing' className='host'>Become A Host</a>):(<a href='/login' className='host'>Become A Host</a>)}
          
          <button className="navbar_right_account" onClick={()=>setDropdownMenu(!dropdownMenu)}>
            <Menu className='icon' />
            {!user ? (<Person className='icon' />) 
            : 
            (<img src={`http://localhost:3001/${user.profileImagePath.replace("public", "" )}`} alt="profile photo" style={{objectFit: "cover", borderRadius: "50%"}} />) 
            }
            
          </button>
          {
            dropdownMenu && !user && (
              <div className="navbar_right_accountmenu">
                <Link to="/login">Log in</Link>
                <Link to="/register">Sign Up</Link>
              </div>
            )
          }

          {
            dropdownMenu && user && (
              <div className="navbar_right_accountmenu">
                <Link to={`/${user._id}/trips`}>Trip List</Link>
                <Link to={`/${user._id}/wishList`}>Wish List</Link>
                <Link to={`/${user._id}/properties`}>Property List</Link>
                <Link to={`/${user._id}/reservations`}>Reservation List</Link>
                <Link to="/create-listing">Become A Host</Link>
                <Link to="/" onClick={()=>{
                  dispatch(setLogout())
                }}>Log Out</Link>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Navbar