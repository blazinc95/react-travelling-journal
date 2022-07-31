import React from 'react'
import globe from '../assets/globe.png'

const Navbar = () => {
  return (
    <div className="nav">
        <img src={globe} alt="globe icon" />
        <span>My Travelling Journal.</span>
    </div>
  )
}

export default Navbar