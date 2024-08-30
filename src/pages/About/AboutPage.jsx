
// component
import Banner from '../../components/Banner/banner.jsx';
import bannerImage from '../../img/picture/picture2.png';
import Collapse from '../../components/Collapse/collapse.jsx';
import '../../styles/about.scss';

// data
import collapseData from '../../data/about.json';

/**
 * About component renders the About page with a banner and collapsible sections.
 * 
 * @function About
 * @returns {JSX.Element} The rendered About page including a banner and collapsible sections.
 */


// function to render About Page 
function About() {
    return (
        <>
            <Banner pImageUrl={bannerImage} />
            
            {collapseData.map((item, index) => ( // iterate trough json to set index for each item 
                <Collapse 
                    key={index} 
                    title={item.title} 
                    content={item.content} 
                />
            ))}
        </>
    );
}

export default About