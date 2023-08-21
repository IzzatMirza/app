import React from 'react'
import Img1 from "../../Imgs/dropidea.png"
import Img2 from "../../Imgs/artik.png"
import Img3 from "../../Imgs/insta.png"

export default function Project() {
  return (

    <>
      <div style={{ marginTop: "100px" }} className='container ' >
        <h1 style={{ fontFamily: "fantasy" }}>Projects</h1>
        <p>__-___-___-____-____-_</p>
      </div>





      <div className='container mt-3' >

        <div className='row'>
          <div className='col-12 col-md-6'>
            <h3 style={{ fontFamily: "cursive" }} >Project_1</h3>
            <p>Arttik is a dynamic online platform where creators showcase their diverse artworks, spanning from paintings and sculptures to digital art and photography, fostering a vibrant community for artistic inspiration and appreciation.</p>

            <a href="https://g-project-c1a79.web.app/">
              <button className='btn btn-outline-secondary'>Click here</button>
            </a>

          </div>

          <div className='col-12 col-md-6 mt-3' data-aos="fade-up-right" data-aos-duration="1500">
            <img className='img1 rounded' src={Img1} alt="Img" />
          </div>
        </div>
      </div>





      <div className='container mt-3'>

        <div className='row'>
          <div className='col-12 col-md-6'>
            <h3 style={{ fontFamily: "cursive" }} >Project_2</h3>
            <p>Arttik is a dynamic online platform where creators showcase their diverse artworks, spanning from paintings and sculptures to digital art and photography, fostering a vibrant community for artistic inspiration and appreciation.</p>

            <a href="https://axiomatic-lock.surge.sh/">
              <button className='btn btn-outline-secondary'>Click here</button>
            </a>

          </div>

          <div className='col-12 col-md-6 mt-3' data-aos="fade-up-right" data-aos-duration="1500">
            <img className='img2 rounded' src={Img2} alt="Img" />
          </div>
        </div>
      </div>



      <div className='container mt-3'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h3 style={{ fontFamily: "cursive" }} >Project_3</h3>
            <p>The deceptive Instagram phishing website lures users with convincing visuals and prompts to disclose personal credentials, preying on their trust to steal sensitive information, emphasizing the importance of online vigilance.</p>

            <a href="https://innate-vessel.surge.sh/">
              <button className='btn btn-outline-secondary'>Click here</button>
            </a>

          </div>

          <div className='col-12 col-md-6 mt-3 '  data-aos="fade-up-right" data-aos-duration="2000">
            <img className='img3 rounded' src={Img3} alt="Img" />
          </div>
        </div>
      </div>
    </>
  )
}
