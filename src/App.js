import './App.css'

import React, { useContext } from 'react'
import AddTodo from './components/add_todo.js'
import Todo from './components/todo.js'

import { TodoContext } from './components/todo_context.js'

function App( ) {
    // === CONTEXT HOOK ===
    const { todo_list } = useContext( TodoContext );

    // === COMPONENT RENDER ===
    return (
        <div className="app-container" >
            <div className='todo-box' >
                <h1>My Todo-list</h1>
            
                <AddTodo />
                <div>
                    { todo_list.map( todo => ( <Todo todo_metadata={todo} /> ) ) }
                </div>
            </div>
        </div>
    );
}

export default App;
