import React, {useState} from "react";
import MovieCard from "../movieCard/MovieCard";
import classes from "./searchMovie.module.css";

export default function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className={classes.form} onSubmit={searchMovies}>
                <label className={classes.label} htmlFor="query">Movie Name</label>
                <input className={classes.input} type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className={classes.button} type="submit">Search</button>
            </form>

            <div className="row">
                
                    {movies.filter(movie => movie.poster_path).map(movie => (

                        <MovieCard movie={movie} key={movie.id} />

                    ))}
                
            </div>    
        </>
    )
}