import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';

export default function About() {
  useEffect(()=>{
  Aos.init()
  },[])
  return (
    <>
      <div style={{ marginTop: "100px" }} className='container '>
        <h1 style={{fontFamily:"fantasy"}}>Resume</h1>
        <p>__-___-___-____-____-_</p>
    
      </div>
      <div style={{ marginTop: "100px" }} className='container ' data-aos="fade-up-right" data-aos-duration="1700" >
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h3 style={{fontFamily:"cursive"}} >Education</h3>
          </div>

          <div className='col-12 col-md-6 '>
            <h5>Establishment Name | <br /> Master's Degree</h5>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaerat placeat ea, possimus a labore.</p>

            <div className='mt-5'>
              <h5>Eslablishment Name | <br />
                Bachelor's Degree
              </h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam illo at ea illum deleniti tenetur.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-5' style={{ border: "1px solid grey" }} data-aos="flip-left" data-aos-duration="2000"></div>





      <div className='container' data-aos="fade-up-right" data-aos-duration="1700" >
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h3 style={{fontFamily:"cursive"}} >Skills</h3>
          </div>
          <div className='col-12 col-md-6'>
            <h5>HTML</h5>
            <div class="container">
              <div class="skills html">90%</div>
            </div>

            <h5>CSS</h5>
            <div class="container">
              <div class="skills css">80%</div>
            </div>

            <h5>JavaScript</h5>
            <div class="container">
              <div class="skills js">50%</div>
            </div>

            <h5>React</h5>
            <div class="container">
              <div class="skills react">55%</div>
            </div>

            <h5>Node / Express.js</h5>
            <div class="container">
              <div class="skills noex">30%</div>
            </div>

            <h5>MongoDB</h5>
            <div class="container">
              <div class="skills mongodb">30%</div>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-5' style={{ border: "1px solid grey" }} data-aos="flip-right" data-aos-duration="1700"></div>



      <div style={{ marginTop: "100px" }} className='container ' data-aos="fade-up-right" data-aos-duration="1700">
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h3 style={{fontFamily:"cursive"}} >Work <br />
              Experience
            </h3>
          </div>

          <div className='col-12 col-md-6 '>
            <h5>Editor</h5>
            <p className='mb-5'>

              I have coding experience in VsCode . I have been coding for the past 5 months
            </p>

            <div className='mt-5'>
              <h5>About Coding</h5>

              <p>

                🛠️ Technical Expertise:
                My voyage through the MERN Stack has empowered me with a versatile skill set, enabling me to seamlessly traverse the full development cycle. From architecting robust backends with Node.js and Express.js to sculpting captivating and interactive frontends using React, I have honed my abilities to create immersive user experiences. My adeptness in MongoDB has facilitated the creation of efficient and scalable databases, ensuring seamless data management.

                🌐 Innovative Solutions:
                Throughout my journey, I've had the privilege of collaborating on diverse projects that have pushed the boundaries of creativity and functionality. Whether it's crafting a responsive e-commerce platform, designing intuitive user interfaces, or integrating real-time features using WebSockets, I take pride in my ability to transform abstract concepts into tangible, cutting-edge solutions.

                💼 Professional Growth:
                My MERN Stack odyssey extends beyond technical skills. With each project, I have refined my problem-solving capabilities, fostered teamwork in agile environments, and enhanced my project management skills. I thrive on challenges, continuously seeking innovative ways to optimize performance and elevate the overall quality of my work. <br />



                [Waqar Mirza]
                MERN Stack Developer
              </p>


            </div>
          </div>
        </div>
      </div>


     





    </>
  )
}
