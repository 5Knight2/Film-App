import React from "react";

const FilmContext=React.createContext({
    movies:[],
    getData:()=>{},
    addMovie:()=>{},
    removeMovie:()=>{}
})

export default FilmContext;