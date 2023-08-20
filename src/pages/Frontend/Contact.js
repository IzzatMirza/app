import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Contact() {

  useEffect(()=>{
  Aos.init()
  },[])
  return (

    <>
      <div style={{ marginTop: "100px" }} className='container mb-5'>
        <h1 style={{ fontFamily: "fantasy" }}>Contact</h1>
        <p>__-___-___-____-____-_</p>
      </div>


      <div className='container mt-5' data-aos="zoom-out-down" data-aos-duration="1000">
        <div className='row'>
          <div className='col-12 col-md-6 '>
            <h4>Phone</h4>
            <p>03098__7__8</p>
            <h4>Email</h4>
            <p>Izzatmirza____@gmail.com</p>
          </div>

          <div className='col-12 col-md-6'>
            <div className='container'>
              <div className='row'>
              <div className='col-12 col-md-6'>
                <h6>First Name</h6>
                <input type="text" className='form-control' />
              </div>
              <div className='col-12 col-md-6'>
                <h6>Last Name</h6>
                <input type="text" className='form-control' />
              </div>
              </div>
            </div>

            <div className='container mt-4'>
              <div className='row'>
              <div className='col-12 col-md-6'>
                <h6>Email*</h6>
                <input type="text" className='form-control' />
              </div>
              <div className='col-12 col-md-6'>
                <h6>Subject</h6>
                <input type="text" className='form-control' />
              </div>
              </div>
            </div>

            <div className='container mt-4'>
              <div className='row'>
              <div className='col-12 col-md-6'>
                <h6>Message</h6>
                <input type="text" className='form-control' />
              </div>
              <div className='col-12 col-md-6 text-center' >
                <button className='btnn btn mt-3  '>Submit</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>

      

  )
}
