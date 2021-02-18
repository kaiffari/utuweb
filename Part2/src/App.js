import React from 'react'
import Note from './components/Note'

const App = ({notes}) => {
    /*const App = (props) => {  
      const { notes } = props;
      const rivit = () => notes.map(note => <li key={note.id}>{note.content}</li>)
      const result = notes.map(note => note.content)
      console.log(result)*/
    return (
      <div>
        <h1>Muistiinpanot</h1>
        <ul>
          {notes.map(note=><Note key={note.id} note={note}/>)}
        </ul>
      </div>
    )
}

export default App