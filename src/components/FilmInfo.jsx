const FilmInfo = (props) => {
    const {total, done, onDeleteAllFilms,} = props

    const hasTasks = total > 0

    return (
        <div className="film__info">
            <div className="film__total-films">Просмотрено {done} из {total}</div>
            {hasTasks && 
                <button 
                    className=" film__delete-all-button" 
                    type="button"
                    onClick={onDeleteAllFilms}
                >
                    Удалить все фильмы
                </button>
            }
        </div>
    )
}

export default FilmInfo