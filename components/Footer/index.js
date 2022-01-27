import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className='container'>
            <footer className='py-3 my-4'>
                <ul className='nav justify-content-center border-bottom border-top pb-3 mb-3'>
                    <li className='nav-item'>
                        <Link href='/'>
                            <a className='nav-link px-2 text-muted'>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link href='/blog'>
                            <a className='nav-link px-2 text-muted'>
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link href='/contato'>
                            <a className='nav-link px-2 text-muted'>
                                Contato
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link href='/sobre'>
                            <a className='nav-link px-2 text-muted'>
                                Sobre Nos
                            </a>
                        </Link>
                    </li>
                </ul>
                <p className='text-center text-muted'>© 2022 Cageof</p>
            </footer>
        </div>

    )
}

export default Footer
