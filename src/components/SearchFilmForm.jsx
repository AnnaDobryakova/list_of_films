import Field from "./Field"

const SearchFilmForm = (props) => {
  const {
    onSearchInput,
  } = props

    return (
        <form 
          className="film__form"
          onSubmit={(event) => event.preventDefault()}
        >
          <Field 
            className="film__field"
            label="Найти фильм"
            id="search-film"
            type="search"
            onInput={(event) => onSearchInput(event.target.value)}
          />
        </form>
    )
}

export default SearchFilmForm