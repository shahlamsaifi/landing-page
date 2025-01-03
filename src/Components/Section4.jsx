import React from 'react'
import logo1 from '../img/LOGO.png'
import last from '../img/last slide Icons.png'



export default function Section4() {
  return (
    <div>
       <div class="container">
        <div class="all-get">
            <div class="get-in">
                <div class="Get-h1">
                    <h1><b>GET IN <span>TOUCH</span></b></h1>
                </div>
                <div class="get-p">
                    <p>Lorem ipsum Neque porro quisquam est qui do <br /> lorem ipsum quia dolor sit amet, Neque porro
                        elit <br /> NeDque
                        porro </p>
                </div>
                <div class="loction">
                    <h1><b>Office Address</b></h1>
                </div>
                <div class="loction-p">
                    <p>98, Arca St, PR City, 33414 , Indonesia</p>
                </div>
                <div class="loction2">
                    <h1><b>Call Us</b></h1>
                </div>
                <div class="loction2-p">
                    <p>(+BK) 123 456 7891</p>
                </div>
                <div class="loction3">
                    <h1><b>Mail Us</b></h1>
                </div>
                <div class="loction3-p">
                    <p>info@creaticagency.com</p>
                </div>
            </div>
            <div class="get-card">
                <div class="name-h1">
                    <h1>YOUR NAME</h1>
                </div>
                <div class="your-name">
                    <input type="name" />
                </div>
                <div class="email-h1">
                    <h1>YOUR EMAIL</h1>
                </div>
                <div class="your-email">
                    <input type="email" />
                </div>
                <div class="message-h1">
                    <h1>YOUR MESSAGE</h1>
                </div>
                <div class="your-message">
                    <input type="message" />
                </div>
                <div class="send-btn">
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="Creatic">
            <div class="Creatic-logo">
                <img src={logo1} />
            </div>
           
            <div class="creatic-p">
                <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum <br /> quia dolor sit amet, Neque porro elit
                    NeDque </p>
            </div>
            <div class="last-icon">
                <img src={last} />
            </div>
            <div class="last">
                <p>Copyright © 2003-2023 Creatic Agency All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
