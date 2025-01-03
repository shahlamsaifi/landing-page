import React from 'react'
import no1 from '../img/NO1.png'
import no2 from '../img/NO2.png'
import no3 from '../img/NO3.png'


export default function Section2() {
  return (
    <div>
      <div class="container">
        <div class="all-img">
            <div class="img1">
                <img src={no1}/>
            </div>
            <div class="img2">
                <img src={no2} />
            </div>
            <div class="img3">
                <img src={no3} />
            </div>
        </div>
    </div>
    </div>
  )
}
