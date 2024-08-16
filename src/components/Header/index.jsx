import { Link } from 'react-router-dom' // act as an anchor balise 
import logo from '../../img/logo/biglogored.png';
function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="website logo red" width={211} height={68} />
                <ul className="nav-link">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header