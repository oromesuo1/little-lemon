import './Header.css';
import logo from './icons_assets/logo.svg';
import basket from './icons_assets/Basket.svg';
import {Nav} from './Nav';

export function Header(){
    return(
        <header className=''>
            <img src={logo} id='logo' alt='logo' className='Logo'/>
            <Nav />
            <img src={basket} alt='shopping basket' className='Basket'/>
        </header>
    );
}

export default Header;