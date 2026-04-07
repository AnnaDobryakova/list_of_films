import Field from "../components/Field"
import Button from "../components/Button"

const AddFilmForm = (props) => {
    const {
        addFilm,
        newFilmTitle,
        setNewFilmTitle,
    } = props

    const onSubmit = (event) => {
        event.preventDefault()
        addFilm()
    }

    return (
        <form className="film__form" onSubmit={onSubmit}>
            <Field 
                className="film__field"
                label="Название нового фильма"
                id="new-task"
                value = {newFilmTitle}
                onInput={(event) => setNewFilmTitle(event.target.value)}
            />
            <Button type="submit">Добавить</Button>
        </form>
    )
}

export default AddFilmForm