
// style 
import '../../styles/hostinfo.scss';

/**
 * HostInfo component displays the name and picture of the host.
 *
 * @component
 * @param {Object} props - The properties passed to this component.
 * @param {string} props.name - The name of the host.
 * @param {string} props.picture - The URL of the host's picture.
 * @returns {JSX.Element} The rendered component showing the host's name and picture.
 */

const HostInfo = ({name,picture}) => {


    return (
        <>
            <section className="hostinfo">
                <div className="hostinfo-name">
                    <p>{name}</p>
                </div>
                <img src={picture} alt="portrait du propriétaire" className="hostinfo-picture" />
                
            </section>
        </>
    )
}

export default HostInfo;