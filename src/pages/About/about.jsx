
// import of elements and Data/img
import Banner from '../../components/Banner/banner.jsx';
import bannerImage from '../../img/picture/picture2.png';
import Collapse from '../../components/Collapse/collapse.jsx';
import collapseData from '../../data/about.json';


// function to render About Page 
function About() {
    return (
        <>
            <Banner pImageUrl={bannerImage} />
            
            {collapseData.map((item, index) => (
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