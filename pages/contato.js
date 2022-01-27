import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'



function Contato() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h3>Contato</h3>

      <ul>
        <li ><a className='text-decoration-none text-black' href='mailto:cageof.ufopa@gmail.com'><strong>Email:</strong> cageof.ufopa@gmail.com</a></li>
      </ul>

      <div className='d-flex flex-column align-items-center'>
        <a href="https://www.facebook.com/segufopa" className="p-2 text-decoration-none text-info" target="_blank">
          <FontAwesomeIcon icon={faFacebook}/> Facebook
        </a>
        <a href="https://www.instagram.com/ufopaseg" className="p-2 text-decoration-none text-warning" target="_blank">
          <FontAwesomeIcon icon={faInstagram}/> Instagram
        </a>
        <a href="https://www.youtube.com/channel/UCBCajnCZw753bjzUp8MUNAw" className="p-2 text-decoration-none text-danger"
          target="_blank">
          <FontAwesomeIcon icon={faYoutube}/> Youtube
        </a>
      </div>
    </div>
  )
}

export default Contato
