import React, { useState } from 'react'
import './Navbar.css'
import{FaBars , FaTimes} from 'react-icons/fa'

function Navbar() {
    const  [ click, setClick ] = useState(false)
    const handleClick = ()=>{setClick(!click)}
    const hideMenu = ()=> {
        setClick(click=>!click)
    }
    

  return (
<div className="header">
   <div className="container">
       <h2>Cri<span className='primary'>ba</span></h2>
       <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li>
               <a href="/" onClick={hideMenu}> home</a>
           </li>
           <li>
               <a href="/coins" onClick={hideMenu}> Coins</a>
           </li>
           <li>
               <a href="/" onClick={hideMenu}> earned</a>
           </li>
           <li>
               <a href="/contact" onClick={hideMenu}> contact</a>
           </li>
          <li>
          <button className="btn  mobile" onClick={hideMenu}>Connect Wallet</button>
              </li>
       </ul>
       <div className="btn-group">
           <button className="btn desktop">Connect Wallet</button>
       </div>
       <div className="hamburger" onClick={handleClick}>
           {
             !click ? 
          (<FaBars size={20} style={{color : '#333'}}/>) :
          ( <FaTimes size={20} style={{color: '#333'}}/>)
           }
       </div>
   </div>
</div>
  )
}

export default Navbar