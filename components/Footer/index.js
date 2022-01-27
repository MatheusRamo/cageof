import React from 'react';
import Image from 'next/image'

function Footer() {
    return (
        <div className='container'>
            <footer className='py-3 my-4'>
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link px-2 text-muted'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link px-2 text-muted'>
                            Blog
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link px-2 text-muted'>
                            Contato
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link px-2 text-muted'>
                            Sobre Nos
                        </a>
                    </li>
                </ul>
                <p className='text-center text-muted'>© 2022 Cageof</p>
            </footer>
        </div>

    );
}

export default Footer;
