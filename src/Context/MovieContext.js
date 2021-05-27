import { createContext } from "react";
import { MOVIE_DATA } from './Data';  

const MovieContext = createContext(MOVIE_DATA);

export default MovieContext;
