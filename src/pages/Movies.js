import React, { useState } from 'react'
import ButtonSearch from '../components/buttons/ButtonSearch'
import Input from '../components/input/Input'
import MovieListAll from '../components/movie/MovieListAll'

export default function Movies() {
    const [input, setInput] = useState('')
    return (
        <div id='movie'>
            <div className='container'>
                <div className="row mt-5 mb-5 justify-content-center">
                    <div className="search col-lg-8 text-center">
                        <Input setInput={setInput} />
                        <ButtonSearch input={input} />
                    </div>
                </div>
                <MovieListAll />
            </div>
        </div>
    )
}
