
// import of component to display in the home page
import Banner from '../../components/Banner/banner.jsx';
import bannerImage from '../../img/picture/picture.png';
import CardList from '../../components/Card/cardList.jsx';
import '../../styles/home.scss';

/**
 * Home component displays the main page of the application.
 * 
 * @function Home
 * @returns {JSX.Element} The rendered home page with a banner and a list of cards.
 */

// function to display home page content 
function Home()  {
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
