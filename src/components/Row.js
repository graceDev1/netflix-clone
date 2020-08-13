import React, { useState, useEffect} from 'react'
import instance from '../axios';
import '../css/Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTraileUrl] = useState("");


    useEffect(()=>{
        // use effect runs once, the components load and don't run again 
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars : {
            autoplay: 1,
        },
    };


    const handleClick= (movie) =>{
        // https://www.youtube.com/watch?v=1v_4dL8l8pQ
        if(trailerUrl){
            setTraileUrl("");
        } else{
           movieTrailer(movie?.name || "") 
           .then(url =>{

               const urlParams = new URLSearchParams(new URL(url).search);
               setTraileUrl(urlParams.get('v'));
           })
           .catch((error)=> console.log(error))
        }
    }
    return (
        <div className="row">
            {/* title */}
            <h2>{ title}</h2>
            {/* container -> posters */}

            <div className="row_posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={()=> handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                     src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {/* trailer play */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
