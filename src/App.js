import React from 'react';
import './App.css';


const init = [
  {id:1, label: 'todo1', done:false},
  {id:2, label: 'todo2', done:false},
  {id:3, label: 'todo3', done:false},
  {id:4, label: 'todo4', done:true},
]

function ListItem({todo,done}) {
  return (
    <div onClick={() => done(todo.id)} >
      <input type="checkbox" />
      <div >{todo.label} </div> 
  </div>
  );
 
}

function ListItemDone({todo,undone}) {
  return(
  <div>
        <input type="checkbox" checked/>
        <div onClick={() => undone(todo.id)}>{todo.label}</div>
        </div>)
}

function App() {
  const [todos, setTodos] = React.useState(init);
 
  console.log("RENDER")

  const done = (id) => {
    setTodos(state => {
      return state.map(todo => {
        if (todo.id !== id) return todo;
        return {...todo, done: true};
      });
    });
  }
  const undone = (id) => {
    setTodos(state => {
    return state.map(todo => {
      if (todo.id !== id) return todo;
      return {...todo, done: false};
    });
  });
  }
  return <div>
    <hr/>
    {todos
      .filter(todo => todo.done === false)
      .map(todo => {
        return(
        <ListItem todo={todo} done={done}/>
        )
        // return (
        //   <div onClick={() => done(todo.id)} >
        //     <input type="checkbox" checked/>
        //     <div >{todo.label} </div> 
        // </div>
        // ); 
      })}
    <hr/>
    {todos
    .filter(todo => todo.done === true)
    .map(todo => {
      return (
        <ListItemDone todo={todo} undone={undone}/>
      )
      /*map(todo => {
      return <div>
        <input type="checkbox"/>
        <div onClick={() => undone(todo.id)}>{todo.label}</div>
        </div>*/
        })}
  </div>

}


export default App;
