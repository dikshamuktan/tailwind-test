
import { useState } from "react";
import {Link,useParams} from "react-router-dom"
function MovieDetails({movies}){
    const params = useParams()

    const currentMovie = movies.find(movie => movie.id == params.id)
    return (
        <div>
            <p>Movie Name: {currentMovie.movieName}</p>
            <p>Movie Rating: {currentMovie.movieRating}</p>
            <p>Movie Casts: {currentMovie.casts}</p>
            <p>Movie description: {currentMovie.description}</p>
        </div>
    )
}

export default MovieDetails;