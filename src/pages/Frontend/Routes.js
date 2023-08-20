import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../Frontend/Home"
import About from "../Frontend/About"
import Project from "../Frontend/Project"
import Contact from "../Frontend/Contact"
import Navbar from "../../component/Header/Navbar"
import Footer from '../../component/Footer/Footer';

export default function Index() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/project' element={<Project />} />

                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
