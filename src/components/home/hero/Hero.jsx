import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='' title='What is Water Footprint?' />
            <p>The water footprint is the total amount of freshwater used directly and indirectly to produce goods and services. It includes rainwater, surface/groundwater used in agriculture, industry, and domestic settings, and water needed to dilute pollutants. This concept helps assess environmental impact, identify conservation opportunities, and promote sustainable water management. It aids companies, governments, and individuals in understanding dependencies and enhancing water security.</p>
            <div className='button'>
              <button className='primary-btn'>
                Calculate your Water footprint <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
