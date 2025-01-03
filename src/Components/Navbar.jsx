import React from 'react'
import logo from "../img/LOGO.PNG"

export default function Navbar() {
  return (
    <div class="container">
    <div class="navbar">
        <div class="nav">
            <div class="logo">
                <img src={logo} />
            </div>
            <div class="contant">
                <a href="home">Home</a>
                <a href="About Us">About Us</a>
                <a href="Services">Services</a>
                <a href="Portfolio">Portfolio</a>
                <a href="Contact Us">Contact Us</a>
            </div>
        </div>
    </div>
</div>
  )
}
