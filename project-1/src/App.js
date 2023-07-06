// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

let globalID = 0
function App() {

  const [task, setTask] = useState("")
  const [toDos, setToDos] = useState([])

  function createToDo() {
    setToDos(oldToDos => {
      setTask('')
      return [...oldToDos, { todo: task, id: globalID++ }]
    })
  }

  function deleteBtn(itemID) {
    setToDos(oldToDos => oldToDos.filter(items => items.id !== itemID))
  }
  const CheckEnterKey = (e) => {
    if (e.keyCode === 13) {
      
      createToDo()

    }
  }
  return (
    <div>
      <h1>TO Do App</h1>
      <input onKeyDown={CheckEnterKey} type='text' value={task} onChange={e => {
        setTask(e.target.value)
      }} />
      <button onClick={createToDo}>Create Todo</button>
      <ul>
        {toDos.map((items, index) => {
          return <div key={items.id}>
            <li>{items.todo} ({items.id})</li>
            <button onClick={() => deleteBtn(items.id)}>DeleteBtn</button>
          </div>
        })}
      </ul>
    </div>
  );
}

export default App;
