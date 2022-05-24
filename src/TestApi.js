import React from 'react'
import Axios from 'axios'
import { tmdbAPI } from './api/tmdbApi'

export default function TestApi() {
    const getApi = () => {
        let promise = Axios({
            method: 'get',
            url: tmdbAPI.getMovieList('popular', 1)
        })
        promise.then((response) => {
            console.log(response.data.results)
        })
    }

    return (
        <div>
            <button onClick={getApi}>Click</button>
        </div>
    )
}
