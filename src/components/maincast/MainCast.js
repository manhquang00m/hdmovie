import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { tmdbAPI } from '../../api/tmdbApi'
import './maincast.css'

export default function MainCast(props) {
    const [data, setData] = useState({
        cast: [
            { profile_path: '', name: '' },
            { profile_path: '', name: '' },
            { profile_path: '', name: '' },
            { profile_path: '', name: '' },
            { profile_path: '', name: '' },
            { profile_path: '', name: '' }
        ]
    })
    useEffect(() => {
        let promise = Axios({
            method: 'get',
            url: tmdbAPI.getMovieInfo(props.idFilm, 'casts')
        })
        promise.then((response) => {
            setData(response.data)
        })
    }, [props.idFilm])

    const renderCast = () => {
        let arr = [0, 1, 2, 3, 4, 5]
        const res = arr.map(item => {
            return (
                <div key={item} className='col-lg-2 col-4 '>
                    <img src={tmdbAPI.imageOriginal(data.cast[item].profile_path)} alt="" />
                    <h5>{data.cast[item].name}</h5>
                </div>
            )
        })
        return res
    }
    console.log('re-render cast')

    return (
        <div className='row cast'>
            {
                renderCast()
            }

        </div>
    )
}
