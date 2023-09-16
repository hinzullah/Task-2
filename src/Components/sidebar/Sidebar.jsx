import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tv.png'
import './Sidebar.css'
import {GoHome} from 'react-icons/go'
import {BiCameraMovie} from 'react-icons/bi'
import {PiTelevisionSimpleThin} from 'react-icons/pi'
import {RxCalendar} from 'react-icons/rx'
import {HiOutlineLogout} from 'react-icons/hi'


function Sidebar() {
  return (
    <nav className='sidebar'>
        <div className='logo'>
            <img src={logo} alt='logo' />
            <h3>MovieBox</h3>
        </div>
        <ul>
            <li>
                <span><GoHome/>
                </span><Link to="/">Home</Link>
            </li>
            <li>
                <span><BiCameraMovie/></span>
                <Link to="/movies">Movies</Link>
            </li>
            <li>
                <span><PiTelevisionSimpleThin/></span>
                <Link to="/tv-series">TV Series</Link>
            </li>
            <li>
                <span><RxCalendar/></span><Link  to="/upcoming">Upcoming</Link>
            </li>
        </ul>
        
        <div className='play'>
            <h5>Play movie quizzes and earn free tickets</h5>
            <p>50k people are playin now</p>
            <a href="/">Start Playing</a>
        </div>
        <div className='logout'><HiOutlineLogout/><a href="/">Log Out</a></div>
    </nav>
  );
}

export default Sidebar;
