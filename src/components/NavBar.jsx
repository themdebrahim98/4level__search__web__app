import React, { useState, useRef } from 'react'
import './navBar.css'
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {

  const nav__links_ref = useRef();
  const [toggle, settoggle] = useState(false)

  const toggle__class = () => {

    settoggle(!toggle);
  }
  return (
    <>
      <div className='nav__bar'>
        <div className="logo">logo</div>
        <div className='bar'>
          {
            toggle ? <h2 onClick={toggle__class}>X</h2> : <GiHamburgerMenu onClick={toggle__class} />
          }

        </div>
        <nav>
          <ul ref={nav__links_ref} className={`nav__links  ${toggle ? 'active' : ''}`}>
            <li><a href="#"></a>Rent</li>
            <li><a href="#"></a>Buy</li>
            <li><a href="#"></a>Sell</li>
            <li><a href="#"></a>Manageproperty</li>
          </ul>
        </nav>
        <div className="signin__signup" ref={nav__links_ref}>
          <a href="#" className='signin'><button>Signin</button></a>
          <a href="#" className='signup'><button>Signup</button></a>
        </div>
      </div>
    </>
  )
}
