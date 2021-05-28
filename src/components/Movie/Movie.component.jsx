import React,{ useContext } from 'react';
import './Movie.styles.css'
import MovieContext from '../../Context/MovieContext';

const Movie = () => {
    const { movieData } = useContext(MovieContext);
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
                                    
                                            <img src={item.image} />
                                    
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