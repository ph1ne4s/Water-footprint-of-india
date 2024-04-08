import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  const [showMore, setShowMore] = React.useState(false)
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          {/* <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />
           */}
<Heading subtitle="Applications" title="Applications of Water Footprint" />
          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    
                  </div>
                  {/* <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div> */}
                </div>
                <p>{showMore ? val.desc : `${val.desc.substring(0, 250)}`}
                  <button className="btn" onClick={() => setShowMore(!showMore)}> Read more...
                  </button></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
