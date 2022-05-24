import React from 'react'
import Banner from '../components/banner/Banner'
import MovieList from '../components/movie/MovieList'
import { tmdbAPI } from '../api/tmdbApi'

export default function Home() {
    return (
        <div id='home'>
            <div className='container'>
                <Banner />
                <MovieList url={tmdbAPI.getMovieList('now_playing', 1)} typeFilm='now_playing' heading='Now Playing' />
                <MovieList url={tmdbAPI.getMovieList('top_rated', 1)} typeFilm='top_rated' heading='Top Rated' />
                <MovieList url={tmdbAPI.getMovieList('upcoming', 1)} typeFilm='upcoming' heading='Trending' />
                {/* <MovieList url={tmdbAPI.getMovieList('trending', 1)} heading='Top Rated' /> */}
            </div>
        </div>
    )
}
