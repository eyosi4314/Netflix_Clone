import React from 'react'
import  "./row.css"
import axios from "../../../utils/axios";
import { useEffect, useState } from 'react'
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const Row = ( {title, fetchUrl , isLargeRow}) => { 
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => { 
        (async () => {
           
           try { 
            console.log("fetchUrl", fetchUrl);
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
        } catch (error) {
            console.log( "error" , error);
        }
    } ) ()
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name)
                .then((url) => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    console.log(urlParams.get('v'));

                    setTrailerUrl(urlParams.get('v'));
                } )
           
        }
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    return ( 
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie , index) => (
                    <img
                        onClick={() => handleClick(movie)}
                         key={index} src ={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />
                ))}
            </div>


            <div style={{ padding:'40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
             </div>
        </div>
    )
}


export default Row
