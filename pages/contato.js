import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'



function Contato() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h3>Contato</h3>

      <ul>
        <li ><a className='text-decoration-none text-black' href='mailto:cageof.ufopa@gmail.com'><strong>Email:</strong> cageof.ufopa@gmail.com</a></li>
      </ul>

      <div className='d-flex flex-column align-items-center'>
        <a href="https://www.facebook.com/segufopa" className="p-2 text-decoration-none text-info">
        <FaFacebook/>  facebook
        </a>
        <a href="https://www.instagram.com/ufopaseg" className="p-2 text-decoration-none text-warning">
          <FaInstagram/> Instagram
        </a>
      </div>
    </div>
  )
}

export default Contato
