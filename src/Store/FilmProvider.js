import FilmContext from "./FilmContext";

import React,{useState} from 'react'

const FilmProvider=(props)=>{
const [movies,setMovies]=useState([]);

const setDataHandler=(data)=>{
    setMovies(data)
}

const addMovieHandler = (movie) => {
    setMovies((curr) => [...curr, movie]);
    console.log(movies);
}

const removeMovieHandler=(id)=>{
     setMovies(
          (curr)=>{const a=curr.filter(
            (c,i,a)=>{
            return(!(c.id==id))})
          console.log(a)
        return a;}
             
             )

}

const film={
    movies:movies,
    setData:setDataHandler,
    addMovie:addMovieHandler,
    removeMovie:removeMovieHandler
}



return(
    <FilmContext.Provider value={film}>
{props.children}
    </FilmContext.Provider>
)
}
export default FilmProvider;