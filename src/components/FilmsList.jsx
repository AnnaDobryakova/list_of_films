import FilmItem from "./FilmItem"

const FilmsList = (props) => {
    const {
        films = [],
        onDeleteFilmButtonClick,
        OnFilmCompleteChange,
        onEditFilmButtonClick,
    } = props

    const hasFilms = true

    if(!hasFilms) return <div className="film__empty-message"></div>

    return (
        <ul className="film__list">
            {films.map((film) => (
                <FilmItem
                    className="film-item"
                    key={film.id}
                    id={film.id}
                    title={film.title}
                    isDone={film.isDone}
                    onDeleteFilmButtonClick={onDeleteFilmButtonClick}
                    OnFilmCompleteChange={OnFilmCompleteChange}
                    onEditFilmButtonClick={onEditFilmButtonClick}
                />
            ))}
        </ul>
    )
}

export default FilmsList