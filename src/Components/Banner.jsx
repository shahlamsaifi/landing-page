import React from 'react'
import Group from '../img/Group 20.png'
import Group14 from '../img/Group 15.png'

export default function Banner() {
  return (
    <div>
       <div class="container">
        <div class="about-us">
            <div class="about-img">
                <img src={Group14} />
            </div>
            <div class="mix-about">
                <div class="about-h1">
                    <h1>ABOUT US</h1>
                </div>
                <div class="about-heading">
                    <h1> <b>We Bring <span> Creative </span> ideas <br /> to life.</b></h1>
                </div>
                <div class="about-h4">
                    <h4>We love Creating</h4>
                </div>
                <div class="pahraa">
                    <p>Lorem ipsumNeque porro quisquam est qui do lorem ipsum <br /> quia dolor sit amet, Neque porro
                        elit NeDque
                        porro Lorem <br /> ipsum Neque porro Neque porro <br />
                        Neque porro quisquam est qui do lorem ipsum quia dolor sit <br /> amet, Lorem ipsum Neque quis
                        ipsum </p>
                </div>
                <div class="read-more">
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
        <div class="team-img">
            <img src={Group} />
        </div>
        </div>
    
    </div>
  )
}
