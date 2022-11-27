import { useState, useEffect } from 'react'
import { filterFilmsByDirector } from '../helpers/film.helpers.js'
import { getUniqueListOf } from "../helpers/film.helpers.js";

function FilmsPage(props) {
  const [list, setList] = useState([])
  const [searchDirector, setSearchDirector] = useState("")

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        return res.json()
      })
      .then((films) => {
        console.log(films)
        setList(films)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getFilms();
  }, []);

  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getUniqueListOf(list, "director")


  return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <form>
            <div className="form-group">
                <label htmlFor="searchDirectorSelect">Select Directors: </label>
                <select 
                name="searchDirectorSelect" 
                id="searchDirectorSelect"
                value={searchDirector}
                onChange={(e) => {
                setSearchDirector(e.target.value)
                    }}
                >
                <option value="">All</option>
                {directors.map((directorName, index) => {
                    return <option key={`${directorName}${index}`} value={directorName}>{directorName}</option>
                })}
                </select>
            </div>
        </form>
    <ul>
        {filmsByDirector.length > 0? filmsByDirector.map((element) => {
        return (
          <li key={element.id}>
            <p>
              {element.title} ---- {element.rt_score}%
            </p>
            <img src={element.image} alt="Movie poster" />
          </li>
        );
      })
      :
      list.map((element) => {
        return (
          <li key={element.id}>
            <p>
              {element.title} ---- {element.rt_score}%
            </p>
            <img src={element.image} alt="Movie poster" />
          </li>
        );
      })
     }
    </ul>
    </div>
  );
}

export default FilmsPage;