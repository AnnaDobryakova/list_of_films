
import Button from "../components/Button"
const FilmItem = (props) => {
    const {
      className = '', 
      id, 
      title, 
      isDone, 
      onDeleteFilmButtonClick, 
      onFilmCompleteChange, 
      onEditFilmButtonClick,
      onSaveFilmButtonClick,
      editingId,
      editingTitle,
      setEditingTitle,
    } = props

    return (
        <li className={`film-item ${className}`}>
          <input
            className="film-item__checkbox"
            id={id}
            type="checkbox"
            checked={isDone}
            disabled={editingId === id}
            onChange={(e) => onFilmCompleteChange(id, e.target.checked)}
            
          />

            {editingId === id ? (
                <>
                  <input
                      className="film-item__input"
                      value={editingTitle}
                      onChange={(event) =>                         
                        setEditingTitle(event.target.value)}
                  />
                </>
                ) : (
                  <label className="film-item__label" htmlFor={id}>{title}</label> 
              )
            }
          {editingId === id ? (
            <button className="button" onClick={() => onSaveFilmButtonClick(id, editingTitle)}>
              Сохранить
            </button>
          ) : (
            <>
             <button
            className="film-item__delete-button"
            aria-label="Редактировать фильм"
            title="Редактировать"
            onClick={() => onEditFilmButtonClick(id, title)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 24 24" 
              width="20px" 
              height="20px"
              fill="#00d0ff"
            >    
                <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"/>
            </svg>
          </button>
          <button
            className="film-item__delete-button"
            aria-label="Удалить фильм"
            title="Удалить"
            onClick={() => onDeleteFilmButtonClick(id)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
            </>
          )
            
          }
        </li>
    )
}

export default FilmItem