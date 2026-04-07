import AddFilmForm from "./AddFilmForm"
import SearchFilmForm from "./SearchFilmForm"
import FilmInfo from "./FilmInfo"
import FilmsList from "./FilmsList"
import { useState } from "react"

const Films = () => {

    const [films, setFilms] = useState([
        {
            id: 1,
            title: 'Аватар 2: Путь воды',
            isDone: false
        },
        {
            id: 2,
            title: 'Интерстеллар',
            isDone: true
        },
        {
            id: 3,
            title: 'Один дома',
            isDone: false
        },
    ])

    const [newFilmTitle, setNewFilmTitle] = useState('')

    const deleteAllFilms = () => {
        const isConfirmed = confirm('Вы уверены, что хотите удалить все фильмы?')

        if (isConfirmed) {
            setFilms([])
        }
    }

    const deleteFilm = (filmId) => {
        setFilms(
            films.filter((film) => film.id !== filmId)
        )
    }

    const editFilm = (filmId, newTitle) => {
        setFilms(
            films.map((film) => {
                if (film.id === filmId) {
                    return {...film, title: newTitle}
                }

                return film
            })
        )
    }

    const toggleFilmComplete = (filmId, isDone) => {
        setFilms(
            films.map((film) => {
                if (film.id === filmId) {
                    return {...film, isDone}
                }

                return film
            })
        )
    }

    const filterFilms = (query) => {
        console.log(`Поиск фильмов: ${query}`)
    }

    const addFilm = () => {
        if (newFilmTitle.trim().length > 0) {
            const newFilm = {
                id: crypto.randomUUID() ?? Date.now().toString(),
                title: newFilmTitle,
                isDone: false,
            }

            setFilms([...films, newFilm])
            setNewFilmTitle('')
        }
    }

    return (
        <div className="film">
            <h1 className="film__title">Список фильмов</h1>
            <AddFilmForm 
                addFilm={addFilm}
                newFilmTitle={newFilmTitle}
                setNewFilmTitle={setNewFilmTitle}
            />
            <SearchFilmForm onSearchInput={filterFilms}/>
            <FilmInfo 
                total={films.length} 
                done={films.filter(({isDone}) => isDone).length}
                onDeleteAllFilms={deleteAllFilms}
            />
            <FilmsList 
                films={films}
                onDeleteFilmButtonClick={deleteFilm}
                OnFilmCompleteChange={toggleFilmComplete}
                onEditFilmButtonClick={editFilm}
            />
                
        </div>
    )
}

export default Films