import React from 'react'
import './trailer.css'

export default function Trailer(props) {

    const renderTrailer = () => {
        const arr = [0, 1]
        const res = arr.map((item) => {
            return (
                <div className='trailer'>
                    <h2 className='trailer__title'><span>Trailer</span> <span>{props.trailer.results[item].name}</span></h2>
                    <div>
                        <iframe src={`https://www.youtube.com/embed/${props.trailer.results[item].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="w-full h-full object-fill rounded-lg" width="100%" height="500" frameborder="0"></iframe>
                    </div>
                </div>
            )
        })
        return res
    }
    return (
        <div>
            {
                renderTrailer()
            }
        </div>
    )
}
