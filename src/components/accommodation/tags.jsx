// style
import '../../styles/tags.scss';

/**
 * TagsList component renders a list of tags associated with an accommodation.
 * 
 * @function TagsList
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.tagslist - An array of tags to be displayed.
 * 
 * @returns {JSX.Element} The rendered list of tags as a series of <span> elements.
 */

const TagsList = ({tagslist}) => {

    
    return (
        <section className="tags">
            {tagslist.map((tag,index) => 
            (
            <span key={index} className="tags-element"><p>{tag}</p></span>

            ))}
        </section>

    )
}

export default TagsList;