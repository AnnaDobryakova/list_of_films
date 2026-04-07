import AddFilmForm from "./AddFilmForm"
import SearchFilmForm from "./SearchFilmForm"
import FilmInfo from "./FilmInfo"
import FilmsList from "./FilmsList"
import { useState, useEffect } from "react"

const Films = () => {

    const [films, setFilms] = useState(() => {
        const savedFilms = localStorage.getItem('films')
        if (savedFilms) {
            return JSON.parse(savedFilms)
        } 

        return [
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
        ]
    })

    const [newFilmTitle, setNewFilmTitle] = useState('')

    const [editingId, setEditingId] = useState(null)
    const [editingTitle, setEditingTitle] = useState('')
    
    const [searchQuery, setSearchQuery] = useState('')

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

    const startEditFilm = (filmId, title) => {
        setEditingId(filmId)
        setEditingTitle(title)
    }

    const saveEditedFilm = (filmId, newTitle) => {
        if (newTitle.trim().length === 0) return

        setFilms(
            films.map((film) => {
                if (film.id === filmId) {
                    return {...film, title: newTitle}
                }

                return film
            })
        )
        setEditingId(null)
        setEditingTitle('')
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


    const addFilm = () => {
        if (newFilmTitle.trim().length > 0) {
            const newFilm = {
                id: crypto.randomUUID() ?? Date.now().toString(),
                title: newFilmTitle,
                isDone: false,
            }

            setFilms([...films, newFilm])
            setNewFilmTitle('')
            setSearchQuery('')
        }
    }

    useEffect(() => {
        localStorage.setItem('films', JSON.stringify(films))
    }, [films])

    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase()
    const filteredFilms = clearSearchQuery.length > 0 
        ? films.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
        : null

    return (
        <div className="film">
            <h1 className="film__title">Список фильмов</h1>
            <AddFilmForm 
                addFilm={addFilm}
                newFilmTitle={newFilmTitle}
                setNewFilmTitle={setNewFilmTitle}
            />
            <SearchFilmForm 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <FilmInfo 
                total={films.length} 
                done={films.filter(({isDone}) => isDone).length}
                onDeleteAllFilms={deleteAllFilms}
            />
            <FilmsList 
                films={films}
                filteredFilms={filteredFilms}
                onDeleteFilmButtonClick={deleteFilm}
                onFilmCompleteChange={toggleFilmComplete}
                onEditFilmButtonClick={startEditFilm}
                onSaveFilmButtonClick={saveEditedFilm}
                editingId={editingId}
                editingTitle={editingTitle}
                setEditingTitle={setEditingTitle}
            />
                
        </div>
    )
}

export default Films