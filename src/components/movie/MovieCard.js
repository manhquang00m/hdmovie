import React from 'react'
import './MovieCard.css'
import ButtonDetail from '../buttons/ButtonDetail';
export default function MovieCard(props) {
    return (
        <div className='MovieCard'>
            <img src={props.imgSrc} alt="" />
            <h4>{props.titleFilm}</h4>
            <div className="MovieCard__vote">
                <span>{props.releaseDate.slice(0, 4)}</span>
                <span>{props.voteAverage}
                    <i className='bx bxs-star'></i>
                </span>
            </div>
            <div className="MovieCard__btn">
                <ButtonDetail idFilm={props.idFilm} />
            </div>
        </div>
    )
}
