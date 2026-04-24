import { Link } from "react-router-dom"
import Card from "./Card"
import { useState, useEffect } from "react"
import Button from "./Button"

const PopularFilms = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=728b9953ee4ee52cbe7560de7a6116ff&language=ru-RU')
        .then(response => response.json())
        .then(json => setData(json.results))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="film__popular">
            <Link to={"/"}>
                <Button>Назад</Button>
            </Link>
            <h1 className="film__title">Популярные фильмы</h1>
            <div className="film__cards">
                {data.map(film => {
                    return (
                    <Card 
                        key={film.id}
                        poster_path={film.poster_path}
                        title={film.title}
                        overview={film.overview}
                        release_date={film.release_date}
                        vote_average={film.vote_average}
                    />
                )
                })}
            </div>
        </div>
    )
}

export default PopularFilms