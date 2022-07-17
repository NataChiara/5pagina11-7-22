import './Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Titulo de la pagina 5</h2>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Connection'>Connection</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;