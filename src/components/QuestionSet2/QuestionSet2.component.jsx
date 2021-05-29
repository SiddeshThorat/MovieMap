import React from 'react';
import './QuestionSet2.styles.css';
import FormStyle from '../FormStyle/FormStyle.component';

const QuestionSet2 = (props) => {
    const {releaseDate,movieCharacterName,actorRealName,actorImage} = props
    const { onReleaseDateChange,
            onMovieCharacterNameChange,
            onActorRealNameChange,
            onActorImageChange,
            routeChange
          } = props;

    return(
        <FormStyle>
            <div className="inputField">
            <label>Release Date</label>
            <input type="text" name="releaseData" value={releaseDate} 
                onChange={(event) => onReleaseDateChange(event)}/>
            </div>

            <div className="inputField">
            <label>Movie Character Name</label> 
            <input type="text" name="image" value={movieCharacterName} 
                onChange={(event) => onMovieCharacterNameChange(event)}/>
            </div>

            <div className="inputField">    
            <label>Actor's Real Name</label> 
            <input type="text" name="image" value={actorRealName} 
                onChange={(event) => onActorRealNameChange(event)}/>
            </div>

            <div className="inputField">    
            <label>Actor's Image</label> 
            <input type="text" name="image" value={actorImage} 
                onChange={(event) => onActorImageChange(event)}/> 
            </div>

            <div className="inputField">
            <button onClick={() =>{
                     routeChange('/addmovie/submit')
                }}>REVIEW FORM</button>
            </div>
        </FormStyle>
    ) 
}

export default QuestionSet2;