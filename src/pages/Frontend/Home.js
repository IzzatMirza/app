import React from 'react'
import img from "../../Imgs/main.jpg"
import { useEffect } from 'react'
import "aos/dist/aos.css";
import Aos from 'aos';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Project from './Project';


export default function Home() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div className='container mt-5 mb-5' >
        <div className='row'>
          <div className='col-12 col-md-6' data-aos="fade-up-right" data-aos-duration="2000">
            <img className='rounded-circle' src={img} alt="IMG" />
          </div>

          <div className='col-12 col-md-6 mt-5'>
            <h1>Hi !</h1>
            <h6>I m <span>Mern Stack Developer</span> In this portfolio addition, I'm excited to showcase my proficiency in building full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. I have developed a Task Management Application as a testament to my skills in creating dynamic, user-friendly, and responsive web solutions.</h6>

            <div className='d-flex justify-content-center mt-5'>
            <Link to="/about" style={{ textDecoration: "none", color: "black" }} element={<About />}>

                <div id='links' className='bg-warning rounded-circle m-3 '  data-aos="fade-up-right" data-aos-duration="1000" style={{ height: "130px", width: "130px" , position:"relative" }}>

                  <h3 className='text-center '>Resume</h3>

                </div>
              </Link>

              <Link style={{ textDecoration: "none", color: "black" }} to="/project" element={<Project />}>
                <div id='links' className='bg-danger rounded-circle m-3 ' style={{ height: "130px", width: "130px", position: "relative" }}  data-aos="fade-up-right" data-aos-duration="1500">
                  <h3 className='text-center'>Project</h3>
                </div>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }} to="/contact" element={<Contact />}>
                <div id='links' className='bg-info rounded-circle m-3' style={{ height: "130px", width: "130px", position: "relative" }}  data-aos="fade-up-right" data-aos-duration="2000" >
                  <h3 className='text-center'>Contact</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
