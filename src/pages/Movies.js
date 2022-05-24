import React from 'react'
import ButtonSearch from '../components/buttons/ButtonSearch'
import Input from '../components/input/Input'
import MovieListAll from '../components/movie/MovieListAll'

export default function Movies() {
    return (
        <div id='movie'>
            <div className='container'>
                <div className="row mt-5 mb-5 justify-content-center">
                    <div className="search col-lg-8 text-center">
                        <Input />
                        <ButtonSearch />
                    </div>
                </div>
                <MovieListAll />
            </div>
        </div>
    )
}
