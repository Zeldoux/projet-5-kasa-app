import Banner from '../../components/Banner/banner.jsx';
import bannerImage from '../../img/picture/picture2.png';
import Collapse from '../../components/Collapse/collapse.jsx';

function About() {
    return (
        <>
        <Banner 
        pImageUrl={bannerImage}
        />
        <Collapse />
        </>

    )
}

export default About