import React from 'react'
import main from '../assets/main-logo.jpg'
import dev from '../assets/dev-img.png'
import git from '../assets/git-logo.png'
import ig from '../assets/ig-logo.png'
import ld from '../assets/ld-logo.png'
import '../App.css'

function Main() {
  return (
    <div className='main'> 
    <div className='logo-m'>
        <a href="https://in.linkedin.com/in/mustkim-khatik-b22376226?trk=public_profile_samename-profile" target={"blank"}>
          <img src={ld} alt=""  className='dev-img'/>
        </a>
        <a href="https://github.com/MustkimKhatik" target={"blank"}>
          <img src={git} alt=""  className='dev-img'/>          
        </a>
          <img src={main} alt="" className='main-img'/>
          <a href="https://dev.to/mustkimkhatik" target={"blank"}>
          <img src={dev} alt=""  className='dev-img'/>
          </a>
          <a href="https://www.instagram.com/mustkimsig/" target={"blank"}>
            <img src={ig} alt=""  className='dev-img'/>
          </a>
      </div>
      <div className='my-name'>
        <h1>Mustkim Khatik</h1>
          <h3>Empowering Open Source</h3>
      </div>
    </div>
  )
}

export default Main