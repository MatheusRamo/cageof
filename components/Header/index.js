import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <header className='p-3 bg-light'>
            <div className='d-flex justify-content-around align-items-center'>
                <Link href='/'>
                    <a className='text-decoration-none text-white'>
                    <Image src='/logo.png' width={50}
      height={50}/>
                    </a>
                </Link>

                <ul className='nav d-flex justify-content-around'>
                    <li>
                        <Link href='/'>
                            <a className='flex nav-link px-2 text-black'>
                            <FontAwesomeIcon  icon="home" /> Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'>
                            <a className='nav-link px-2 text-black'>
                            <FontAwesomeIcon icon="rss" /> Blog
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contato'>
                            <a className='nav-link px-2 text-black'>
                            <FontAwesomeIcon icon="envelope" /> Contato
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href='/sobre'>
                            <a className='nav-link px-2 text-black'>
                            <FontAwesomeIcon icon="user" /> Sobre Nos
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>


    );
};
export default Header;