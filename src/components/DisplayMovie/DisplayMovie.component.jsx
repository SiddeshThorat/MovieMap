import React,{ useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Link } from 'react-router-dom';
import MovieContext from '../../Context/MovieContext';
import './DisplayMovie.styles.css';

const DisplayMovie = () => {
    const { movieData } = useContext(MovieContext);
    let params = useParams();
    const movie = movieData.find(movie => movie['id'] === params.id)
    return(
        <div className="movieBlock">
            
            <div className="imageBlock">
                <div className="imageContainer">
                    <img src={movie.image} alt=""/>
                </div>
            </div>
            <div className="detailBlock">
                <div className="detailContainer">
                    <div className="actorContainer">
                        <div className="movieActorName">{movie.actorRealName}</div>
                        <div className="movieActorImage">
                            <img src={movie.actorImage} alt=""></img>
                        </div>
                    </div>
                    <div className="movieTitle">
                        <label className="label" >Title: </label>
                        {movie.title}
                    </div>
                    <div className="movieDescription">
                        <label className="label">Description: </label>
                        {movie.description}
                    </div>
                    <div className="movieReleaseDate">
                        <label className="label">Release Date: </label>
                        {movie.releaseDate}
                    </div>
                    <div className="movieCharacterName">
                        <label className="label">Movie Character Name:</label>
                        {movie.movieCharacterName}
                    </div>
                    <Link to='/'><button className="goBackButton">Go Back</button></Link>
                </div>
            </div>
        </div>
    )
}


export default DisplayMovie;