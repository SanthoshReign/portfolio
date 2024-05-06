import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass="active" to='certificate' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Certificate</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>

        {/* adding a burger menu */}
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=> {setShowMenu(!showMenu)}}/>
        <div className="navMenu" style={{display: showMenu ? 'flex': 'none'}}>
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Skills</Link>
            <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to='certificate' spy={true} smooth={true} offset={-500} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Certificate</Link>
            <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-500} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Contact Me</Link>
        </div>

    </nav>
  )
}

export default Navbar