import Link from 'next/link';
const Header = () => {
    return (
        <header className='p-3 bg-dark text-white'>
            <div className='d-flex justify-content-around align-items-center'>
                <Link href='/'>
                    <a className='text-decoration-none text-white'>
                        LOGO
                    </a>
                </Link>

                <ul className='nav d-flex justify-content-around'>
                    <li>
                        <Link href='/'>
                            <a className='nav-link px-2 text-white'>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'>
                            <a className='nav-link px-2 text-white'>
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contato'>
                            <a className='nav-link px-2 text-white'>
                                Contato
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href='/sobre'>
                            <a className='nav-link px-2 text-white'>
                                Sobre Nos
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>


    );
};
export default Header;