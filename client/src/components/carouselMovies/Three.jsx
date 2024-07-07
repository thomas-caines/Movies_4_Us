// From Dependencies
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

export function Three() {
    const [poster, setPoster] = useState([])

    useEffect( () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWVjMDBkY2JhYWU0Mjk1NWMzMDQxZDZkMTI5NmI0YyIsIm5iZiI6MTcxOTI1MTcwOC43ODM5NTgsInN1YiI6IjY2NzMyMmRjYWNiYTRiYTlhYWQ4MDRiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QqhTrO9vhWuAfREWRhotyTUyLAo0jeItdTeGUWtJYjs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                setPoster(response.results[2])
                
            })
            .catch(err => console.error(err));
    },[])
    return(
        <div>
            <Link to={`/movies/${poster.id}`}>
                <Image src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`}/>
            </Link>
        </div>
    )
}