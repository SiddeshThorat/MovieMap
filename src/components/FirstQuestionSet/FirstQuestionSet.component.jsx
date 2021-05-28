import './FirstQuestionSet.styles.css';
import {Link } from 'react-router-dom';
import React,{useState} from 'react';
import  MovieContext  from '../../Context/MovieContext';

const FirstQuestionSet = ({history}) => {
    const movie = {
            'image': 'www.xyz.com',
            'title': 'Checking',
            'description': "Trial",
            'releaseDate': '27 May 2021'
        }
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [releaseDate,setReleaseDate] = useState('');    

    let movie2 = {
            'image': image,
            'title': title,
            'description': description,
            'releaseDate': releaseDate,
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
    return(
        <MovieContext.Consumer>
        {
            ({updateMovieData}) => {
                return(
                    <>
                    <form>
                        <input 
                        type="text" 
                        name="title" 
                        value={title}
                        onChange={(event) => onTitleChange(event)} />
                        <input type="text" name="description" value={description} 
                         onChange={(event) => onDescriptionChange(event)}/>
                        <input type="text" name="releaseData" value={releaseDate} 
                         onChange={(event) => onReleaseDateChange(event)}/>
                        <input type="text" name="image" value={image} 
                         onChange={(event) => onImageChange(event)}/>
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