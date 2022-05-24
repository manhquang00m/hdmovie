import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { tmdbAPI } from '../../api/tmdbApi';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import ButtonDetail from '../buttons/ButtonDetail';

export default function Banner() {
    const [dataBanner, setDataBanner] = useState([])
    const [genreBanner, setGenreBanner] = useState([])
    useEffect(() => {
        let promise = Axios({
            method: 'get',
            url: tmdbAPI.getMovieList('popular', 1)
        })
        promise.then((response) => {
            setDataBanner(response.data.results)
        })

        let promise2 = Axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US'
        })
        promise2.then((response) => {
            setGenreBanner(response.data.genres)
        })
    }, [])

    return (
        <div className='banner'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

            >
                {
                    dataBanner.map((item, index) => {
                        return (
                            <SwiperSlide style={{ height: '500px' }} key={index}>
                                <img style={{ height: '500px', width: '100%' }} src={tmdbAPI.imageOriginal(item.backdrop_path)} alt="" />
                                <div className='banner__infor'>
                                    <h2>{item.title}</h2>
                                    <div className='banner__infor--genre'>
                                        {
                                            // lấy ra thể loại tương ứng cho từng bộ phim
                                            item.genre_ids.map((idGenre, index) => {
                                                let genreAction
                                                genreBanner.forEach(genreApi => {
                                                    if (genreApi.id === idGenre) {
                                                        genreAction = genreApi.name
                                                    }
                                                });
                                                return (
                                                    <span key={index}>{genreAction}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <ButtonDetail idFilm={item.id} />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
