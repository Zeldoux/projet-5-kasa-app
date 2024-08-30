// data (img)
import logo from '../../img/logo/logowhite.png';

/**
 * Footer component displays the website's footer section.
 * 
 * @function Footer
 * @returns {JSX.Element} The rendered footer section with the website logo and a copyright notice.
 */

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="website logo white" width={123} height={41}/>
            <p>@ 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer