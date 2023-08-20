import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import "aos/dist/aos.css";
import Aos from 'aos';



export default function Footer() {

  useEffect(() => {
    Aos.init()
  }, [])

  const date = new Date();
  let year = date.getFullYear()

  return (
    <>
      <div className='container my-5' style={{ border: "1px solid black" }} data-aos="flip-left" data-aos-duration="1000"></div>
      <div className='container mt-5' data-aos="zoom-in" data-aos-duration="1000">
        <div className='row text-center'>
          <div className='col-12 col-md-3 my-4'>
            <h4>Phone</h4>
            <p className='my-4'>03098_5__08</p>
          </div>
          <div className='col-12 col-md-3 my-4'>
            <h4>Email</h4>
            <p className='my-4'>Izzatmirza____@gmail.com</p>
          </div>
          <div className='col-12 col-md-3 my-4'>
            <h4>Follow Me</h4>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <h3 className='Icon' >< FaWhatsapp /></h3>
              <a href="https://www.facebook.com/izzatmirza.izzatmirza">  <h3 className='Icon' >< FaFacebook /></h3></a>
              <h3 className='Icon' >< FaInstagram /></h3>
            </div>
          </div>
          <div className='col-12 col-md-3 my-4'>

            <p className='my-4'>&copy;{year} Powered and secure <br />[ Izzat Mirza 👍]</p>
          </div>
        </div>
      </div>
    </>
  )
}
