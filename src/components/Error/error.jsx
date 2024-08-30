
// link component (for navigation)
import { Link } from 'react-router-dom' // act as an anchor balise

/**
 * Error component displays a 404 error page when a requested page is not found.
 * 
 * @function Error
 * @returns {JSX.Element} The rendered error page with a message and a link to return to the home page.
 */

// function to display error page// component ? 
const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Oups! La page que vous demandez n'existe pas</h3>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
        
    )
}
 
export default Error