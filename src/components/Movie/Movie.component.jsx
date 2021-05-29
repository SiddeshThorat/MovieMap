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
                                  
                    {
                        movieData.map(item => {
                            return(
                                <tr className="contentRow" >
                                    <td>
                                        <div className="movieImageContainer" onClick={() => {
                                            
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