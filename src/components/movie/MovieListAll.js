import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { tmdbAPI } from '../../api/tmdbApi';
import MovieCard from './MovieCard'
import Pagination from '../pagination/Pagination';
import { useParams } from 'react-router-dom';

export default function MovieListAll(props) {
    const [data, setData] = useState({
        results: []
    })
    const [page, setPage] = useState(1)
    const { filmType } = useParams()
    const type = filmType.slice(1, filmType.length)

    const checkSearch = filmType.slice(1, 7)

    // tao url
    let url
    let query = filmType.slice(7, filmType.length)
    if (checkSearch === 'search') {
        url = tmdbAPI.getMovieSearch(query, page)

    } else url = tmdbAPI.getMovieList(type, page)
    console.log(url)
    // render heading
    let heading = ''
    if (type === 'popular') {
        heading = 'Trending Movies'
    } else if (type === 'top_rated') {
        heading = 'Top Rated Movies'
    } else if (type === 'now_playing') {
        heading = 'Now Playing'
    } else if (type === 'upcoming') {
        heading = 'Upcoming Movies'
    } else if (type === 'similar') {
        heading = 'Similar Movies'
    } else {
        heading = 'Results:'
    }
    console.log(url)


    // Fetch API
    useEffect(() => {
        let promise = Axios({
            method: 'get',
            url: url
        })
        promise.then((response) => {
            setData({
                ...data,
                results: response.data.results
            })
        })
    }, [page, query])
    console.log(data)
    const renderListMovie = () => {
        let res = data.results.map((item, index) => {
            return (
                <div style={{ marginBottom: '30px' }} className="col-lg-3 col-6" key={index}>
                    <MovieCard imgSrc={tmdbAPI.imageSize500(item.poster_path)} voteAverage={item.vote_average} releaseDate={item.release_date} titleFilm={item.title} idFilm={item.id} />
                </div>
            )
        })
        return res
    }
    return (
        <div>
            <h1 className='listall-title'>{heading}</h1>
            <div className='row' >
                {
                    renderListMovie()
                }
            </div>
            <div className='row justify-content-center'>
                <div className="col-10 col-md-10 col-lg-12">
                    <Pagination itemsPerPage={1} setPage={setPage} totalPage={499} />
                </div>
            </div>
        </div>
    )
}
