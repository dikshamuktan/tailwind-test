import Home from './pages/homepage';
import MovieDetails from './pages/moviedetails';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/header";

const movies =[
    {"id": 1, "movieName": "Inception", "movieRating": 8.8, "casts": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"], "releasedDate": "2010-07-16", "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."},
    {"id": 2, "movieName": "The Dark Knight", "movieRating": 9.0, "casts": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], "releasedDate": "2008-07-18", "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."},
    {"id": 3, "movieName": "Interstellar", "movieRating": 8.6, "casts": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], "releasedDate": "2014-11-07", "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."},
    {"id": 4, "movieName": "The Matrix", "movieRating": 8.7, "casts": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], "releasedDate": "1999-03-31", "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."},
    {"id": 5, "movieName": "The Shawshank Redemption", "movieRating": 9.3, "casts": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"], "releasedDate": "1994-09-23", "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."},
    {"id": 6, "movieName": "Pulp Fiction", "movieRating": 8.9, "casts": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], "releasedDate": "1994-10-14", "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."},
    {"id": 7, "movieName": "Fight Club", "movieRating": 8.8, "casts": ["Brad Pitt", "Edward Norton", "Meat Loaf"], "releasedDate": "1999-10-15", "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."},
    {"id": 8, "movieName": "Forrest Gump", "movieRating": 8.8, "casts": ["Tom Hanks", "Robin Wright", "Gary Sinise"], "releasedDate": "1994-07-06", "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75."},
    {"id": 9, "movieName": "The Lord of the Rings: The Fellowship of the Ring", "movieRating": 8.8, "casts": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"], "releasedDate": "2001-12-19", "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."},
    {"id": 10, "movieName": "The Lord of the Rings: The Return of the King", "movieRating": 9.0, "casts": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"], "releasedDate": "2003-12-17", "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."},
]


function Script(){
    return(
 <div>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" Component={()=><Home movies={movies} />}></Route>
        <Route path="/movies/details/:id" Component={()=> <MovieDetails movies={movies} />}></Route>
    </Routes> 
    </BrowserRouter>
 </div>
    )
}

export default Script;