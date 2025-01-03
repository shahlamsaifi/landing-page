import React from 'react'
import woman from '../img/beautiful-woman-with-big-jewel 1.png'

export default function Header() {
  return (
<div class="container1">
        <div class="banner">

            <div class="banner-contant">
                <div class="heading-h">
                    <h1>Welcome to creatic</h1>
                </div>
                <div class="heading-h1">
                    <h1><b>WE ARE <span>CREATIVE</span> <br /> DESIGN AGENCY</b></h1>
                </div>
                <div class="pahraghrap">
                    <p>Lorem ipsumNeque porro quisquam est qui <br /> dolorem ipsum  quia dolor sit amet,<br /> consectetur,
                        adipisci
                        velit Neque porro elit Neque <br /> </p>
                </div>
                <div class="getin-btn">
                    <button>GET IN TOUCH</button>
                </div>
            </div>
            <div class="banner-img">
                <img src={woman} />
            </div>
        </div>
    </div>
  )
}
