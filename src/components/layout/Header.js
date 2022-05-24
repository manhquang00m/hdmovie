import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className='d-flex justify-content-center'>
            <Link to='/'>HDmovie</Link>
            <Link to='/home' >Home</Link>
            <Link to='/movies:popular'>Movie</Link>
        </header>
    )
}
