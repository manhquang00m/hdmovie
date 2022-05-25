import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
export default function ButtonSearch(props) {
    return (
        <>
            <Link to={`/movies:search${props.input}`} className='btn-search'><i className='bx bx-search'></i></Link>
        </>
    )
}
