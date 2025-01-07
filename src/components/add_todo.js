import React, { useContext, useState } from 'react'
import { TodoContext } from './todo_context.js'

/**
 * AddTodo component
 * @note : Create add todo component.
 **/
const AddTodo = ( ) => {
    // === CONTEXT HOOK ===
    const { todo_list, AddTodo } = useContext( TodoContext );

    // === STATE HOOK ===
    const [ new_todo, setNewTodo ] = useState( '' );

    /**
     * onSubmit async function
     * @note : Submit callback.
     * @param data : Current form data value.
     **/
    const onSubmit = async ( data ) => {
        if ( new_todo.trim( ) !== '' ) {
            AddTodo( new_todo );
            setNewTodo( '' );
        }
    };
    
    // === COMPONENT RENDER ===
    return (
        <form action={onSubmit} className="input-section" >
            <input 
                type="text" 
                value={new_todo}
                onChange={ ( e ) => setNewTodo( e.target.value ) } 
                placeholder="Add a new task"
            />
            <button type="submit" >Add</button>
        </form>
    );
}

export default AddTodo;
