import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios'
import { tmdbAPI } from '../api/tmdbApi';
import Trailer from '../components/trailer/Trailer';
import MainCast from '../components/maincast/MainCast';
import MovieSimilar from '../components/movieSimilar/MovieSimilar';

export default function MovieDetail() {
    const { movieId } = useParams();
    const idFilm = movieId.slice(1, movieId.length)
    const [data, setData] = useState({
        backdrop_path: '',
        videos: {
            results: [{ name: '', key: '' }, { name: '', key: '' }]
        }
    })
    useEffect(() => {
        let promise = Axios({
            method: 'get',
            url: tmdbAPI.getMovieDetails(idFilm)
        })
        promise.then((response) => {
            setData(response.data)
        })
    }, [movieId])

    return (
        <>
            <div className='container-fuild'>
                <div className="movie-detail-banner">
                    <img src={tmdbAPI.imageOriginal(data.backdrop_path)} alt="" />
                    <img src={tmdbAPI.imageOriginal(data.poster_path)} alt="" />
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                </div>
                <div className='main-cast'>
                    <MainCast idFilm={idFilm} />
                </div>
            </div>
            <div className='container'>
                <Trailer trailer={data.videos} />
                <MovieSimilar idFilm={idFilm} />
            </div>
        </>
    )
}
