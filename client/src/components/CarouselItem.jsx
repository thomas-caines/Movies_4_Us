// From Dependencies
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

export function CarouselItem({ poster }) {
    if( !poster){ return <p>Loading</p>}
    return(
        <div>
            <Link to={`/movies/${poster.id}`}>
                <Image src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`}/>
            </Link>
        </div>
    )
}