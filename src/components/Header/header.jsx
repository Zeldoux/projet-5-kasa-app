import { Link, useLocation } from 'react-router-dom' // act as an anchor balise 
// data (img)
import logo from '../../img/logo/biglogored.png';


/**
 * Header Component
 * 
 * @component
 * 
 * @description
 * This component is responsible for rendering the header section of the application.
 *  which includes the navigation bar and the website's logo.
 * The `Link` component from React Router is used for client-side navigation.
 *  allowing users to switch between different routes without reloading the page.
 */

const Header = () => {
    const location = useLocation(); // get location (URL)

    const isActive = (path) => location.pathname === path;
    return(
        <header>
            <nav>
                <img src={logo} alt="website logo red" width={211} height={68} />
                <ul className="nav-link">
                <li>
                        <Link 
                            to="/" 
                            className={isActive('/') ? 'active' : ''}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={isActive('/about') ? 'active' : ''}
                        >
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header