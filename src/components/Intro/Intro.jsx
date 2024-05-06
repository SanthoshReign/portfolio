import React from 'react'
import './Intro.css'
import bg from '../../assets/photo.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introText">
                I'm &nbsp;
                <span className="introName">
                    Santhosh,
                </span>
                <br />
                <span className="profession">Software Developer</span>
                
            </span>
            <p className="introPara">
                Passionate software developer with a keen eye for innovation and <br />a drive to create impactful solutions. 
                Committed to continuous learning <br /> and staying updated with the latest technologies, I am dedicated to <br />
                delivering high-quality software solutions that exceed expectations <br /> and drive business success.
            </p>
            <Link>
                <button className="btn">
                    <img src={btnImg} alt="" className='btnImg'/>
                    Hire Me
                </button>
            </Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro;