import React from 'react';

const QuestionSet2 = (props) => {
    const {releaseDate,movieCharacterName,actorRealName,actorImage} = props
    const { onReleaseDateChange,
            onMovieCharacterNameChange,
            onActorRealNameChange,
            onActorImageChange,
            routeChange
          } = props;

    return(
        <>
            <label>Release Date</label>
            <input type="text" name="releaseData" value={releaseDate} 
                onChange={(event) => onReleaseDateChange(event)}/>

            <label>Movie Character Name</label> 
            <input type="text" name="image" value={movieCharacterName} 
                onChange={(event) => onMovieCharacterNameChange(event)}/>

            <label>Actor's Real Name</label> 
            <input type="text" name="image" value={actorRealName} 
                onChange={(event) => onActorRealNameChange(event)}/>

            <label>Actor's Image</label> 
            <input type="text" name="image" value={actorImage} 
                onChange={(event) => onActorImageChange(event)}/> 

            <button onClick={() =>{
                     routeChange('/addmovie/submit')
                }}>REVIEW FORM</button>
        </>
    ) 
}

export default QuestionSet2;