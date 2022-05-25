import React from 'react'
import './input.css'
export default function Input(props) {
    return (
        <>
            <input className='input' placeholder='Find your movie here...' type='text' onChange={e => { props.setInput(e.target.value) }}></input>
        </>
    )
}
