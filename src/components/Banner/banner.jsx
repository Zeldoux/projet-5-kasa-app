
// import of style and react proptype
import PropTypes from 'prop-types';
import '../../styles/banner.scss';

// function to display Banner content with 2 props (Image, Title)
function Banner({pImageUrl = '', pTitle = ''}) { // set 2 prop (image , title)
    return (
            <div className="banner" style={{ backgroundImage: `url(${pImageUrl})` }}>
                <div className="banner-content">
                    {pTitle && <h1>{pTitle}</h1>}
                </div>
            </div>

        
    )
}
// set prop types recieved in banner function 
Banner.propTypes = {
    pImageUrl: PropTypes.string,
    pTitle: PropTypes.string
};

export default Banner;