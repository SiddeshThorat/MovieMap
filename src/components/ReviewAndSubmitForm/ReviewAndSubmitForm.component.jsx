import React from 'react';
import {useHistory} from 'react-router-dom';

const ReviewAndSubmitForm = (props) => {
    const history = useHistory();
    const {movie,updateMovieData} = props;
    return(
        <button onClick={(event) =>{
            event.preventDefault();
            updateMovieData(movie)
            history.push('/')
        }}>SUBMIT</button>
    )
}

export default ReviewAndSubmitForm;