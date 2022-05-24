import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { tmdbAPI } from '../../api/tmdbApi';
import MovieCard from './MovieCard'
import Pagination from '../pagination/Pagination';
import { useParams } from 'react-router-dom';

export default function MovieListAll(props) {
    const { filmType } = useParams()
    const type = filmType.slice(1, filmType.length)
    console.log(type)

    const [data, setData] = useState({
        results: []
    })
    const [page, setPage] = useState(1)
    useEffect(() => {
        let promise = Axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/movie/${type}/?api_key=b65299b9bc36d67f043452a7dc185a25&page=${page}`
        })
        promise.then((response) => {
            setData({
                ...data,
                results: response.data.results
            })
        })
    }, [page])
    const renderListMovie = () => {
        let res = data.results.map((item, index) => {
            return (
                <div style={{ marginBottom: '30px' }} className="col-lg-3" key={index}>
                    <MovieCard imgSrc={tmdbAPI.imageSize500(item.poster_path)} voteAverage={item.vote_average} releaseDate={item.release_date} titleFilm={item.title} idFilm={item.id} />
                </div>
            )
        })
        return res
    }
    return (
        <div>
            <h1>{type}</h1>
            <div className='row' >
                {
                    renderListMovie()
                }
            </div>
            <div className='row '>
                <div className="col-12">
                    <Pagination itemsPerPage={1} setPage={setPage} totalPage={499} />
                </div>
            </div>
        </div>
    )
}
