import React from 'react'
import Main from './main'

function Home() {
  return (
    <div>
        <Main /> 
          <ul className='ul-links'>
            <a href="https://github.com/MustkimKhatik" target={"blank"}>
              <li>Github</li> 
            </a>
            <a href="https://dev.to/mustkimkhatik" target={"blank"}>
              <li>DEV community</li>
            </a>
            <a href="https://twitter.com/MustkimKhatik11" target={"blank"}>
              <li>Twitter</li>
            </a>             
              
          </ul>
    </div>
  )
}

export default Home