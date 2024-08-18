import { Link } from 'react-router-dom' // act as an anchor balise 

// function to display error page// component ? 
function Error() {
    return (
        <div>
            <h1>404</h1>
            <h3>Oups! La page que vous demandez n'existe pas</h3>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
        
    )
}
 
export default Error