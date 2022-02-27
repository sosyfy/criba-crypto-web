import React from 'react'
import crypto from '../../assets/hero-img.png'
import './hero.css'

function Hero() {
  return (
<div className="hero">
    <div className="container">
        <div className="hero-left">
            <p>buy & sell crypto 24/7 using your  retirement account </p>
            <h1>Invest in Crypto with your IRA </h1>
            <p>buy , sell and store hundreds of cryptocurrencies</p>
            <div className="input-container">
                <input type="email" name="email" id="email" placeholder='Enter your email ...' />
                <div className="btn">learn more</div>
            </div>
        </div>
      <div className="hero-right">
          <div className="img-container">
              <img src={crypto} alt="" />
          </div>
      </div>
    </div>
</div>
    )
}

export default Hero