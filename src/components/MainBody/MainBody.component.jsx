import './MainBody.styles.css'
import Movie from '../Movie/Movie.component';
import { Link } from 'react-router-dom';

const MainBody = () => {
    return(
        <div className="mainBody">          
            <div className="table">
                <div className="headerRow">
                    <div className="headerField"><span>Image</span></div>
                    <div className="headerField"><span>Movie Name</span></div> 
                    <div className="headerField"><span>Description</span></div>
                    <div className="headerField"><span>Release Date</span></div>    
                </div>
            </div>    
            <div className="movieList">
                <Movie />
            </div>
        </div>
    )
}

export default MainBody;