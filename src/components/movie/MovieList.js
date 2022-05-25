import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { tmdbAPI } from '../../api/tmdbApi';
import MovieCard from './MovieCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
export default function MovieList(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        let promise = Axios({
            method: 'get',
            url: props.url
        })
        promise.then((response) => {
            setData(response.data.results)
        })
    }, [])
    return (
        <div>
            <h1 className='mb-4'>{props.heading} <Link className='viewmore' to={`/movies:${props.typeFilm}`}>View More</Link></h1>
            <div className='row' style={{ margin: 0 }}>
                <Swiper
                    freeMode={true}
                    modules={[FreeMode]}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            width: 320,
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        // when window width is >= 768px
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                    }}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <SwiperSlide style={{ marginRight: '80px' }} key={index}>
                                    <MovieCard idFilm={item.id} imgSrc={tmdbAPI.imageSize500(item.poster_path)} voteAverage={item.vote_average} releaseDate={item.release_date} titleFilm={item.title} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
