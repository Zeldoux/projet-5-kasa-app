
import PropTypes from 'prop-types';
import '../../styles/banner.scss';


function Banner({pImageUrl = '', pTitle = ''}) { // set 2 prop (image , title)
    return (
            <div className="banner" style={{ backgroundImage: `url(${pImageUrl})` }}>
                <div className="banner-content">
                    {pTitle && <h1>{pTitle}</h1>}
                </div>
            </div>

        
    )
}

Banner.propTypes = {
    pImageUrl: PropTypes.string,
    pTitle: PropTypes.string
};

export default Banner;