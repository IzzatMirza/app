import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../Frontend/Home"
import About from "../Frontend/About"
import Project from "../Frontend/Project"
import Contact from "../Frontend/Contact"
import Navbar from "../../component/Header/Navbar"
import Footer from '../../component/Footer/Footer';

export default function Index() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <BrowserRouter>



                <Navbar />

                <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

                    <div className='d-flex justify-content-end'>
                        <lord-icon
                            onClick={toggleMode}
                            src="https://cdn.lordicon.com/tgnqhsfe.json"
                            trigger="hover"
                            colors="primary:yellow,secondary:red"
                            style={{ width: "60px", height: "60px" }}>
                        </lord-icon>
                        
                    </div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/project' element={<Project />} />

                    </Routes>

                    <Footer />
                </div>

            </BrowserRouter>
        </>
    )
}
