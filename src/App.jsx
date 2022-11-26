import { useState } from "react"
import FilmsList from "./components/FilmsList.jsx"

export default function App(props) {
  const [list, setList] = useState(["ready", "set", "Go"])
  const [text, setText] = useState();

  function onSubmit(event) {
    event.preventDefault()
    setList([...list, text]);
  }

  return (
    <div>
      <h1>hello World</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button type="submit" >Add</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <FilmsList />
    </div>
  )
}

















































// import React from 'react'
// import "./App.css"
// import FilmsList from './components/FilmsList'

// export default class app extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       list: ["ready", "set", "go"],
//       text: ""
//     };

//     this.handleInput = this.handleInput.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     this.setState({
//       list: [...this.state.list, this.state.text]
//     })
//   }

//   handleInput(event) {
//     this.setState({
//       text: event.target.value,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//         <form onSubmit={this.onSubmit}>
//         <input
//         type = "text"
//         name = "text"
//         id = "text"
//         value = {this.state.text}
//         onChange={this.handleInput}
//         />
//         <button type = "submit">Add</button>
//         </form>
//         <ul>
//           {this.state.list.map((item, index) => {
//             return <li key={item + index} >{item}</li>
//           })}
//         </ul>
//         <FilmsList />
//       </div>
//     );
//   }
// }





// 31:50 is line 20 - 41 App.jsx
// 34:48 is line 1 -24.app.jsx