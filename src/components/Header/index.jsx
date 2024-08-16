import { Link } from 'react-router-dom' // act as an anchor balise 
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}

export default Header