import '../css/component_css/Header.css';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <div className='website-header'>
                <nav className='nav-links'>
                    <div className='nav-link'>
                        <Link to="/">HOME</Link>
                    </div>
                    <div className='nav-link'>
                        <Link to="/About">ABOUT</Link>
                    </div>
                    <div className='nav-link'>
                        <Link to="/Contact">CONTACT</Link>
                    </div>
                </nav>
            </div>

            <Outlet />
        </>
    );
}
export default Header