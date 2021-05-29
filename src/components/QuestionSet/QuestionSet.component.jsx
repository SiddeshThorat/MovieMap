import './QuestionSet.styles.css';
import React,{useState} from 'react';
import  MovieContext  from '../../Context/MovieContext';
import {v4 as uuid} from 'uuid';
import  QuestionSet1 from '../QuestionSet1/QuestionSet1.component';
import  QuestionSet2 from '../QuestionSet2/QuestionSet2.component';
import ReviewAndSubmitForm from '../ReviewAndSubmitForm/ReviewAndSubmitForm.component';

const QuestionSet = () => {
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [releaseDate,setReleaseDate] = useState('');    
    const [movieCharacterName , setMovieCharacterName] = useState('');
    const [actorRealName, setActorRealName] = useState('');
    const [actorImage, setActorImage] = useState('')
    const [currentPath,setCurrentPath] = useState('/addmovie/questionSet1')

    let movie = {
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
    const routeChange = (path) => {
        setCurrentPath(path)
    }
    return(
        <MovieContext.Consumer>
        {
            ({updateMovieData}) => {
               if(currentPath === '/addmovie/questionSet1') 
                 {
                       return(
                        <QuestionSet1 
                            title={title}
                            image={image}
                            description={description}
                            onTitleChange={(event)=> onTitleChange(event)}
                            onImageChange={(event)=> onImageChange(event)}
                            onDescriptionChange={(event)=> onDescriptionChange(event)}
                            routeChange = {(path) => routeChange(path)}
                        />
                    )
                }
                if(currentPath === '/addmovie/questionSet2'){
                    return(
                        <QuestionSet2 
                            releaseDate={releaseDate}
                            movieCharacterName={movieCharacterName}
                            actorRealName={actorRealName}
                            actorImage={actorImage}
                            onReleaseDateChange={(event)=> onReleaseDateChange(event)}
                            onMovieCharacterNameChange={(event)=> onMovieCharacterNameChange(event)}
                            onActorRealNameChange={(event)=> onActorRealNameChange(event)}
                            onActorImageChange={(event)=> onActorImageChange(event)}
                            routeChange = {(path) => routeChange(path)}
                        />
                    )
                }
                if(currentPath === '/addmovie/submit'){
                    return(
                        <ReviewAndSubmitForm
                        updateMovieData={updateMovieData}
                        movie={movie}
                    />
                    )
                }
                    

        }
    }
       </MovieContext.Consumer>
    )
}

export default QuestionSet;