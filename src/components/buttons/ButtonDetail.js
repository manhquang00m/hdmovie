import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'
export default function (props) {

    return (
        <>
            <Link to={'/movieDetail:' + `${props.idFilm}`} className='btn-watch'>Watch Details</Link>
        </>
    )
}
