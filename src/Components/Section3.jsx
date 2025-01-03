import React from 'react'
import img1 from '../img/Image.png'
import img2 from '../img/Group 21.png'
import img3 from '../img/Image (1).png'


export default function Section3() {
  return (
    <div>
      <div class="container">
        <div class="experience">
            <div class="why">
                <div class="why-us">
                    <h1>WHY US?</h1>
                </div>
                <div class="exp-h1">
                    <h1><b>25 years of <span> experience </span> <br /> as a creative agency</b></h1>
                </div>
                <div class="READ-BTN">
                    <button>READ MORE</button>
                </div>
            </div>
            <div class="experience-second">
                <div class="pahr">
                    <p>Lorem ipsum Neque porro quisquam est qui do <br /> lorem ipsum quia dolor sit amet, Neque porro
                        elit <br />
                        NeDque porro Lorem ipsum
                    </p>
                    <div class="costumar">
                        <h4>Happy Customer </h4>
                        <h4>Experienced Team</h4>
                        <h4>Modern Technology</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="CLIENTS-SAYS">
            <div class="clients-img">
                <img src={img1} />
            </div>
            <div class="CLIENTS-CARD">
                <div class="clients-h1">
                    <h1><b>WHAT <span> OUR </span> <br /> CLIENTS SAY?</b></h1>
                </div>
                <div class="clients-p">
                    <p>TESTIMONIALS</p>
                </div>
                <div class="card">
                    <img src={img2} />
                </div>
                <div class="view-btn">
                    <button>VIEW ALL TESTIMONIALS </button>
                </div>
            </div>
            <div class="clients-img2">
                <img src={img3} />
            </div>
        </div>
    </div>
    </div>
  )
}
