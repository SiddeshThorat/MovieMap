import './MainBody.styles.css'
import Movie from '../Movie/Movie.component';

const MainBody = () => {
    return(
        <div className="mainBody">
            <div className="addMovie">
                <button className="addButton">Add Movie</button>
            </div>
            <div className="movieList">
                <Movie />
            </div>
        </div>
    )
}

export default MainBody;