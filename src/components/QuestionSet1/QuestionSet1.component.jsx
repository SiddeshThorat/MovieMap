import React from 'react';
import './QuestionSet1.styles.css';

const QuestionSet1 = (props) => {
    const { title,description,image } = props;
    const { onTitleChange,onDescriptionChange,onImageChange,routeChange } = props;
   
    return(
    <>
        <label>Movie Name</label>
        <input 
        type="text" 
        name="title" 
        value={title}
        onChange={event => onTitleChange(event)} />
        
        <label>Description</label>
        <input type="text" name="description" value={description} 
            onChange={event => onDescriptionChange(event)}/>

        
        <label>Image</label> 
        <input type="text" name="image" value={image} 
            onChange={event => onImageChange(event)}/>
     
        <button onClick={() => routeChange('/addmovie/questionSet2')
            }>NEXT</button>
    </>
    )
}

export default QuestionSet1;