import './QuestionSet.styles.css';
import {Link } from 'react-router-dom';
import React,{useState} from 'react';
import  MovieContext  from '../../Context/MovieContext';
import {v4 as uuid} from 'uuid';

const FirstQuestionSet = ({history}) => {
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [releaseDate,setReleaseDate] = useState('');    
    const [movieCharacterName , setMovieCharacterName] = useState('');
    const [actorRealName, setActorRealName] = useState('');
    const [actorImage, setActorImage] = useState('')

    let movie2 = {
            'image': image,
            'title': title,
            'description': description,
            'releaseDate': releaseDate,
            'movieCharacterName': movieCharacterName,
            'actorRealName': actorRealName,
            'actorImage': actorImage,
            'id': uuid()
        }

    const onTitleChange = (event) => {
        event.preventDefault();
        setTitle(event.target.value)
    }
    const onImageChange = (event) => {
        event.preventDefault();
        setImage(event.target.value)
    }
    const onDescriptionChange = (event) => {
        event.preventDefault();
        setDescription(event.target.value)
    }
    const onReleaseDateChange = (event) => {
        event.preventDefault();
        setReleaseDate(event.target.value)
    }
    const onMovieCharacterNameChange = (event) => {
        event.preventDefault();
        setMovieCharacterName(event.target.value)
    }
    const onActorRealNameChange = (event) => {
        event.preventDefault();
        setActorRealName(event.target.value)
    }
    const onActorImageChange = (event) => {
        event.preventDefault();
        setActorImage(event.target.value)
    }
    return(
        <MovieContext.Consumer>
        {
            ({updateMovieData}) => {
                return(
                    <>
                    <form>
                        <label>Movie Name</label>
                        <input 
                        type="text" 
                        name="title" 
                        value={title}
                        onChange={(event) => onTitleChange(event)} />
                        
                        <label>Description</label>
                        <input type="text" name="description" value={description} 
                         onChange={(event) => onDescriptionChange(event)}/>

                        <label>Release Date</label>
                        <input type="text" name="releaseData" value={releaseDate} 
                         onChange={(event) => onReleaseDateChange(event)}/>

                        <label>Image</label> 
                        <input type="text" name="image" value={image} 
                         onChange={(event) => onImageChange(event)}/>

                        <label>Movie Character Name</label> 
                        <input type="text" name="image" value={movieCharacterName} 
                         onChange={(event) => onMovieCharacterNameChange(event)}/>

                        <label>Actor's Real Name</label> 
                        <input type="text" name="image" value={actorRealName} 
                         onChange={(event) => onActorRealNameChange(event)}/>

                         <label>Actor's Image</label> 
                        <input type="text" name="image" value={actorImage} 
                         onChange={(event) => onActorImageChange(event)}/> 

                        <button onClick={(event) =>{
                                event.preventDefault();
                                updateMovieData(movie2)
                                history.push('/')
                            }}>SUBMIT</button>
                    </form>
                    </>
               )
            }
        }
       </MovieContext.Consumer>
    )
}

export default FirstQuestionSet;