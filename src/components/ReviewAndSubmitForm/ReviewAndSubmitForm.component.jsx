import React from 'react';
import {useHistory} from 'react-router-dom';
import FormStyle from '../FormStyle/FormStyle.component';
import './ReviewAndSubmitForm.styles.css';

const ReviewAndSubmitForm = (props) => {
    const history = useHistory();
    const {movie,updateMovieData} = props;

    return(
        <FormStyle>
            <div className="titleSection">
                <div className="imageReviewContainer">
                    <img src={movie.image} alt=""/>
                    <label>Image</label>
                </div>
                <div className="titleContainer">
                    <h3>Title :<span>{movie.title}</span></h3>
                    <h3>Description:<span>{movie.description}</span> </h3>
                </div>
            </div>
            <div className="detailSection">
                <div className="titleContainer">
                    <h3>Release Date :<span>{movie.releaseDate}</span> </h3>
                    <h3>Movie Character Name :<span>{movie.movieCharacterName}</span></h3>
                    <h3>Actor's Real Name :<span>{movie.actorRealName}</span></h3>
                </div>
                <div className="imageReviewContainer">
                    <img src={movie.image} alt=""/>
                    <label>Actor's Image</label>
                </div>
            </div>
            <div className="inputField inputFieldButtons">
                <button className='inputFieldButton' onClick={(event) =>{
                    event.preventDefault();
                    updateMovieData(movie)
                    history.push('/')
                }}>SUBMIT</button>
                <button className='inputFieldButton' onClick={(event) =>{
                    history.push('/')
                }}>CANCEL</button>
            </div>
        </FormStyle>
    )
}

export default ReviewAndSubmitForm;