import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import './NavBar.scss';

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('show-navbar');
    }

    return (
        <header className='navbar'>
            <Logo className='logo' />
            <nav className='link-list' ref={navRef}>
                <Link to='/home' className='link'>Home</Link>
                <Link to='/view' className='link'>View Books</Link>
                <Link to='/add' className='link'>Add Books</Link>
                <Link to='/categories' className='link'>Categories</Link>
                <button onClick={showNavBar} className='nav-btn'>
                    <FaTimes/>
                </button>
            </nav>
            <button onClick={showNavBar} className='nav-btn'>
                <FaBars/>
            </button>
        </header>
    )

}
export default NavBar;
