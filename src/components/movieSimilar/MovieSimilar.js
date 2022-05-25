import React from 'react'
import { tmdbAPI } from '../../api/tmdbApi'
import './movieSimilar.css'
import MovieList from '../movie/MovieList'

export default function MovieSimilar(props) {

    return (
        <div className='movieSimilar'>
            <MovieList url={tmdbAPI.getMovieInfo(props.idFilm, 'similar')} typeFilm='similar' heading='Similar' />
        </div>
    )
}
