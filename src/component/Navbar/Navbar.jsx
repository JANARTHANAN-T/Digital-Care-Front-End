import React , {useState,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assert/image/logo.png'
import { NavLink, Link } from 'react-router-dom'
import Profile from '../Profile/Profile'

async function Navbar() {
    // const [user,setUser]=useState(null)
    // useEffect(()=>{
    //     var hospital=hospital
    //     console.log(hospital)
    //     setUser(hospital)
    // },[])
    // useEffect(()=>{
    //     // var hospital=JSON.parse(localStorage.getItem("hospital"))
    //     // setUser(hospital)
    //     console.log(user)
    // },[user])
    const user=JSON.parse(localStorage.getItem("hospital"))
    console.log(user)
    const [onProfile,setOnProfile]=useState(false)
    const toggleProfile=()=>{
        setOnProfile(!onProfile)
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand mx-4" to="/">
                    <img src={logo} height="40px" />
                    <span className='logo-text'>Digital Care</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-4">Home</NavLink>
                        </li>
                        {user &&
                        <li className="nav-item">
                            <NavLink to="/doctors" className="nav-link mx-4">Doctors</NavLink>
                        </li>
                        }
                        {user &&
                        <li className="nav-item">
                            <NavLink to="/logs" className="nav-link mx-4">Logs</NavLink>
                        </li>
                        }
                        <li className="nav-item">
                        {!user?
                            
                            <div  className="nav-link mx-4" style={{color:'#1385ae'}}><span className='fs-6 mx-2'>Are you the hospital?  </span><Link to='/auth' style={{textDecoration: 'none',color:'#1385ae'}}>Login/Register    </Link></div>
                        
                        :   <div onClick={toggleProfile} class="nav-link mx-4 pointer" style={{color:'#1385ae'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-building-fill-add" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z"/>
                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                                </svg>
                            </div>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {onProfile && <Profile />}
    </div>
  )
}

export default Navbar