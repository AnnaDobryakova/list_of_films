
const Card = (props) => {
    const {
        id,
        poster_path,
        title,
        overview,
        release_date,
        vote_average,
    } = props



    return (
        <div className="film__card">
            <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${poster_path}`} alt={title} />
            <h3 className="film__card-title">{title}</h3>
            <p className="film__card-overview">{overview}</p>
            <p className="film__card-release_date">{new Intl.DateTimeFormat("ru", {dateStyle: "long"}).format(new Date(release_date))}</p>
            <p className="film__card-vote_average">Рейтинг: {Math.round(vote_average * 10) / 10}</p>
        </div>
    
    )
}

export default Card