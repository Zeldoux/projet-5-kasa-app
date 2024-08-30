
// react proptype
import PropTypes from 'prop-types';

// style
import '../../styles/banner.scss';

/**
 * Banner component displays a banner with an optional background image and title.
 * 
 * @function Banner
 * @param {Object} props - The props object.
 * @param {string} props.pImageUrl - The URL of the background image to display in the banner.
 * @param {string} props.pTitle - The title text to display in the banner.
 * @returns {JSX.Element} The rendered Banner component.
 */

// function to display Banner content with 2 props (Image, Title)
const Banner = ({pImageUrl = '', pTitle = ''}) => { // set 2 prop (image , title)
    return (
            <article className="banner" style={{ backgroundImage: `url(${pImageUrl})` }}>
                <div className="banner-content">
                    {pTitle && <h1>{pTitle}</h1>}
                </div>
            </article>

        
    )
}
// set prop types recieved in banner function 
Banner.propTypes = {
    pImageUrl: PropTypes.string,
    pTitle: PropTypes.string
};

export default Banner;