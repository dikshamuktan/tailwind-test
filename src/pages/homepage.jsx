import {Link} from "react-router-dom"
function HomePage({movies}){

    return (
        <div className="flex">
            {
                movies.map((movie,index) => (
                    <div className="h-32 w-80 bg-red-300">
                    <p key={index}>movieName:{movie.movieName}</p>
                    <p>movie.casts{JSON.stringify(movie.casts)}</p>
                    <p>movieRating:{movie.movieRating}</p>
                    <p>ReleasedDate:{movie.releasedDate}</p>
                    <Link to={`/movies/details/${movie.id}`}>Read More..</Link>
                    </div>
                ))
            }    
        </div>
    )
}

export default HomePage;