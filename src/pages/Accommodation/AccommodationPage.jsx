
// component
import SlideShow from "../../components/Slideshow/slideshow.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import HostInfo from "../../components/accommodation/hostinfo.jsx";
import TagsList from "../../components/accommodation/tags.jsx";
import Rating from "../../components/accommodation/rating.jsx";

// style 
import '../../styles/accommodation.scss';

// data 
import cardData from '../../data/logements.json';

// Hook (routing and navigation)
import { useParams, useNavigate } from 'react-router-dom';
import {useEffect} from 'react';

/**
 * Accommodation component displays detailed information about a specific accommodation.
 * 
 * @function Accommodation
 * @returns {JSX.Element} The rendered accommodation detail view or redirects to an error page if the ID is not found.
 */

function Accommodation() {
    // Retrieve location and navigation functionalities from React Router

    // const location = useLocation(); // Hook to access location object
    const navigate = useNavigate(); // Hook to programmatically navigate to different routes

    const { id } = useParams(); 

    const accommodation = cardData.find(item => item.id === id);  // Find the accommodation data by ID
    
    // accommodation is not found (i.e., the ID is invalid), navigate to  error page
    useEffect(() => {
        if (!accommodation) {
            navigate(`/Error`);
        }
    }, [accommodation, navigate]);

    // Return null if accommodation is not found, to prevent rendering any invalid data
    if (!accommodation) {
        return null; 
    }

     // Define a mapping of property names to their respective titles for collapsible sections
     const titleMap = {
        description: "Description",
        equipments: "Equipements"
    };
    
    return (
        <>
        <SlideShow image={accommodation.pictures}/>
        <article className="accommodation-info">
            <div className="accommodation-info-left">
            <h2> {accommodation.title} </h2>
            <p className="location"> {accommodation.location} </p>
            <TagsList tagslist={accommodation.tags}/>
            </div>
            <div className="accommodation-info-right">
            <HostInfo name={accommodation.host.name} picture={accommodation.host.picture} />
            <Rating rating={accommodation.rating}/>
            </div>
        </article>
        <article className="accommodation-collapse"> 
            {Object.keys(titleMap).map((key) => (
        accommodation[key] ? (
            <Collapse 
                key={`${id}-${key}`} 
                title={titleMap[key]} 
                content={accommodation[key]} 
            />
                ) : console.log("No key in titleMap{} is found in the accomodation data ")
            ))}
        </article>            
        </>
    );
};

export default Accommodation;