import Banner from '../../components/Banner/banner.jsx';
import bannerImage from '../../img/picture/picture.png';
import CardList from '../../components/Card/cardList.jsx';

const Home = () => {
  return (
    <>
      <Banner
        pImageUrl={bannerImage}
        pTitle="Chez vous, partout et ailleurs" 
      />
      
      <CardList />
      
    </>
      
  );
};

export default Home;
