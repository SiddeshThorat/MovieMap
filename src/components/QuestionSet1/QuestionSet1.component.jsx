import React from 'react';
import './QuestionSet1.styles.css';
import FormStyle from '../FormStyle/FormStyle.component';

const QuestionSet1 = (props) => {
    const { title,description,image } = props;
    const { onTitleChange,onDescriptionChange,onImageChange,questionSetChange } = props;
   
    return(
        <FormStyle>
            <div className="inputField">
                <label>Movie Name</label>
                <input type="text" name="title" value={title} placeholder="Movie Name"
                onChange={event => onTitleChange(event)} />
            </div>    
            
            <div className="inputField">
            <label>Description</label>
            <input type="text" name="description" value={description} placeholder="Description" 
                onChange={event => onDescriptionChange(event)}/>
            </div>

            <div className="inputField">
            <label>Image</label> 
            <input type="text" alt="" name="image" value={image} placeholder="Enter URL" 
                onChange={event => {onImageChange(event)}}/>
            </div>
        
            <div className="inputField">
                <button onClick={() => questionSetChange('questionSet2')
                    }>NEXT</button>
            </div>    
        </FormStyle>
    )
}

export default QuestionSet1;