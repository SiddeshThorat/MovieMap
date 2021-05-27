import './MainBody.styles.css'
import Movie from '../Movie/Movie.component';
import { Link } from 'react-router-dom';

const MainBody = () => {
    return(
        <div className="mainBody">
            <div className="addMovie">
                <Link to="/addmovie">
                    <button className="addButton">Add Movie</button>
                </Link>
            </div>
            <div className="movieList">
                <Movie />
            </div>
        </div>
    )
}

export default MainBody;