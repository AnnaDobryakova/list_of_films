import Field from "./Field"

const SearchFilmForm = (props) => {
  const {
    searchQuery,
    setSearchQuery,
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
            value={searchQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
          />
        </form>
    )
}

export default SearchFilmForm