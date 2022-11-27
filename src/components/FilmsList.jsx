import { useState, useEffect } from 'react'

function FilmsList(props) {

  const [list, setList] = useState([])

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


  return (
    <ul>
      {list.map((element) => {
        return (
          <li ket={element.id}>
            <p>
              {element.title} ---- {element.rt_score}%
            </p>
            <img src={element.image} alt="Movie poster" />
          </li>
        );
      })}
    </ul>
  );
}

export default FilmsList;