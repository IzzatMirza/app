import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <lord-icon
              src="https://cdn.lordicon.com/dxjqoygy.json"
              trigger="hover"
              colors="primary:info,secondary:red"
              style={{ width: "60px", height: "60px" }}>
            </lord-icon>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" style={{fontFamily:"cursive"}} aria-current="page">Home |</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active" style={{fontFamily:"cursive"}} >Resume |</Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link active" style={{fontFamily:"cursive"}} >Project |</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active" style={{fontFamily:"cursive"}} >Contact |</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
