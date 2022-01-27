import React from 'react'
import {FaFacebook, FaInstagram, FaPhone, FaEnvelopeOpen} from 'react-icons/fa'
import MyHead from '../components/MyHead'



function Contato() {
  return (
    <div className='d-flex flex-column align-items-center py-5 my-5'>
      <MyHead title="Contato"/>
      <h1 className="lg:fs-3 md:fs-4 sm:fs-5 xs:fs-6">Contato</h1>

      <ul className='nav flex-column'>
        <li ><a className='text-decoration-none text-black' href='mailto:cageof.ufopa@gmail.com'><strong> <FaEnvelopeOpen/> Email:</strong> cageof.ufopa@gmail.com</a></li>
        <li ><a className='text-decoration-none text-black'><strong><FaPhone/> Telefone: </strong> (93) 9 9214-1785</a></li>
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
