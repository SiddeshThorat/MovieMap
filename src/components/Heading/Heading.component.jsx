import './Heading.styles.css'
import { ReactComponent as Logo} from '../../images/310997.svg'

const Heading = () => {
    return(
        <div className="headerContainer">
            <div className="LogoContainer">
                <Logo/>
            </div>
            <div className="headerTitleContainer">
                <span>Movie Map</span>
            </div>
        </div>
    )
}

export default Heading;