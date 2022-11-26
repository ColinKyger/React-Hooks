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


























// 21:54 React Hooks Exercise



// import React, { Component } from 'react';

// class FilmsList extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//           list: [],
//         }
//     }

//    getFilms() {
//     fetch("https://ghibliapi.herokuapp.com/films")
//     .then((resolve) => resolve.json())
//     .then((films) => {console.log(films);
//       this.setState({ list: films });
//      }).catch((error) => {console.log("error", error)})

    
//    }

//    componentDidMount() {
//     console.log("App - Mount");
//     this.getFilms()
//    }

//    render() {
//     return <div>
//         <ul>
//         {this.state.list.map((film, index) => {
//             return <li key={(film.id + index)}>{film.title}</li>
//         })}
//     </ul>;
//     </div>
//   }
// }

// export default FilmsList;