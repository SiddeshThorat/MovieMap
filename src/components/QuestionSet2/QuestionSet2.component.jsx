import React from 'react';
import './QuestionSet2.styles.css';
import FormStyle from '../FormStyle/FormStyle.component';

const QuestionSet2 = (props) => {
    const {releaseDate,movieCharacterName,actorRealName,actorImage} = props
    const { onReleaseDateChange,
            onMovieCharacterNameChange,
            onActorRealNameChange,
            onActorImageChange,
            questionSetChange
          } = props;

    return(
        <FormStyle>
            <div className="inputField">
            <label>Release Date</label>
            <input type="text" name="releaseData" value={releaseDate} placeholder="MM-DD-YYYY" 
                onChange={(event) => onReleaseDateChange(event)}/>
            </div>

            <div className="inputField">
            <label>Movie Character Name</label> 
            <input type="text" name="image" value={movieCharacterName} placeholder="Enter Movie Character Name"
                onChange={(event) => onMovieCharacterNameChange(event)}/>
            </div>

            <div className="inputField">    
            <label>Actor's Real Name</label> 
            <input type="text" name="image" value={actorRealName} placeholder="Enter Actor's Name"
                onChange={(event) => onActorRealNameChange(event)}/>
            </div>

            <div className="inputField">    
            <label>Actor's Image</label> 
            <input type="text" name="image" value={actorImage} placeholder="Enter URL "
                onChange={(event) => onActorImageChange(event)}/> 
            </div>

            <div className="inputField inputFieldButtons">
                <button className="inputFieldButton" onClick={() =>{
                        questionSetChange('submit')
                    }}>REVIEW FORM</button>
                <button className="inputFieldButton" onClick={() =>{
                     questionSetChange('questionSet1')
                }}>PREV</button>
            </div>
        </FormStyle>
    ) 
}


export default QuestionSet2;