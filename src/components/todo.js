import React, { useContext } from 'react'
import { TodoContext } from './todo_context.js'

/**
 * Todo Component
 * @note : Create and manage todo functionality.
 * @param todo_metadata : Current todo metadata value.
 **/
const Todo = ( { todo_metadata } ) => {
    // === CONTEXT HOOK ===
    const { ToggleTodo, RemoveTodo } = useContext( TodoContext );

    const OnRemove = ( id ) => {
        RemoveTodo( id );
    };

    // === COMPONENT RENDER ===
    return (
        <div className='todo-list' >
            <li className={ todo_metadata.completed ? 'completed-todo' : '' } >
                <input 
                    type="checkbox" 
                    checked={ todo_metadata.completed } 
                    onChange={ ( ) => ToggleTodo( todo_metadata.id ) }
                />
                <span className={"todo-text " + ( todo_metadata.completed ? 'completed' : '' ) } >
                    {todo_metadata.text}
                </span>
                <button onClick={ ( ) => OnRemove( todo_metadata.id ) } className='delete-btn' >Delete</button>
            </li>
        </div>
    );

};

export default Todo;
