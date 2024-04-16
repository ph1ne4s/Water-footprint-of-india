import React from "react"
import { Link } from "react-router-dom"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
  
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Water Footprint Of India</h1>
            <span></span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to='/about'>Calculator</Link></li>
              <li><Link to='/team'>Team</Link></li>
              <li><Link to='/journal'>Journals</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>

          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                IIT Roorkee,  Roorkee - Haridwar Highway, Roorkee, Uttarakhand 247667
              </li>

              <li>
                <i className='fa fa-paper-plane'></i>
              email-support@iitr.ac.in
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | Made with <i className='fa fa-heart'></i> by Team WaterFootprint
        </p>
      </div>
    </>
  )
}

export default Footer
