import FilmItem from "./FilmItem"

const FilmsList = (props) => {
    const {
        films = [],
        onDeleteFilmButtonClick,
        onFilmCompleteChange,
        onEditFilmButtonClick,
        onSaveFilmButtonClick,
        editingId,
        editingTitle,
        setEditingTitle
    } = props

    const hasFilms = true

    if(!hasFilms) return <div className="film__empty-message">Список фильмов пуст</div>

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
                    onFilmCompleteChange={onFilmCompleteChange}
                    onEditFilmButtonClick={onEditFilmButtonClick}
                    onSaveFilmButtonClick={onSaveFilmButtonClick}
                    editingId={editingId}
                    editingTitle={editingTitle}
                    setEditingTitle={setEditingTitle}
                />
            ))}
        </ul>
    )
}

export default FilmsList