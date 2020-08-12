import React, { useState, useEffect} from 'react'
import instance from '../axios';
import '../css/Row.css';
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        // use effect runs once, the components load and don't run again 
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className="row">
            {/* title */}
            <h2>{ title}</h2>
            {/* container -> posters */}

            <div className="row_posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                     src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>

            {/*  */}
        </div>
    )
}

export default Row
