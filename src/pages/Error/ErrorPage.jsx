import { Link } from 'react-router-dom' // act as an anchor balise 
// style 
import '../../styles/error.scss';

/**
 * Error component displays a 404 error page.
 * 
 * @function Error
 * @returns {JSX.Element} The rendered error page with a 404 message and a link to return to the homepage.
 */


// function to display error page//
function Error() {
    return (
        <article className="error">
            <h1 className="error_title">404</h1>
            <h3 className="error_subtitle">Oups! La page que vous  demandez  n'existe pas</h3>
            <Link to="/" className="error_link">Retourner sur la page d'acceuil</Link>
        </article>
        
    )
}
 
export default Error