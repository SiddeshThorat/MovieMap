import React,{ useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Movie.styles.css'
import MovieContext from '../../Context/MovieContext';

const Movie = () => {
    const { movieData } = useContext(MovieContext);
    const history = useHistory();
    return(
        <div className="movieTableContainer">
            <table className="movieTable">
                <tbody>
                    <tr className="headerRow">
                        <th>Image</th>
                        <th>Movie Name</th> 
                        <th>Description</th>
                        <th>Release Date</th>    
                    </tr>
                
                    {
                        movieData.map(item => {
                            return(
                                <tr className="contentRow" >
                                    <td>
                                        <div onClick={() => {
                                            
                                            history.push(`/movie/${item.id}`)
                                        }}>
                                            <img src={item.image} alt=""/>
                                        </div>
                                    </td>
                                    <td >{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.releaseDate}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
                
            </table>
        </div>
    )
}

export default Movie;