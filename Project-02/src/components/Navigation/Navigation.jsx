import React from 'react'
import styles from "./Navigation.Module.css"
function Navigation() {
    console.log(styles)
  return (
   <nav className={styles.navigation}>
    <div className="logo"> <img src="/images/logo.png" alt="do some coding logo" /></div>
    <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
   </nav>
  )
}

export default Navigation