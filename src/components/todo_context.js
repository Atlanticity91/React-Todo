import React, { createContext, useState, useMemo } from 'react'

/**
 * TodoContext context
 * @note : create TodoContext context.
 **/
export const TodoContext = createContext( );

/**
 * TodoContextWrapper component
 * @note : Create and store todo list context.
 * @param children : Query children components.
 **/
const TodoContextWrapper = ( { children } ) => {
    // === STATE HOOK ===
    const [ todo_list, setTodoList] = useState( [ ] );

    // === FUNCTIONS ===
    /**
     * AddTodo method
     * @note : Add a new todo to the list.
     * @param todo_text : Text of the new todo.
     **/
    const AddTodo = ( todo_text ) => {
        setTodoList( [
            ...todo_list, 
            { 
                id : Date.now( ), 
                text : todo_text, 
                completed: false 
            }
        ]);
    };
    
    /**
     * RemoveTodo method
     * @note : Remove a todo from the list.
     * @param todo_id : Query todo index to remove.
     **/
    const RemoveTodo = ( todo_id ) => {
        setTodoList( todo_list.filter( todo => todo.id !== todo_id ) );
    };
    
    /**
     * toggleTodo method
     * @note : Toggle todo
     * @param todo_id : Query todo index to remove.
     **/
    const ToggleTodo = ( todo_id ) => {
        setTodoList(
            todo_list.map(
                todo => todo.id === todo_id ? { ...todo, completed : !todo.completed } : todo
            ) 
        );
    };

    // === MEMO HOOK ===
    const ContextMemo = useMemo( ( ) => ( {
        todo_list,
        AddTodo,
        RemoveTodo,
        ToggleTodo
    } ), [ todo_list, AddTodo, RemoveTodo, ToggleTodo ] );

    // === COMPONENT RENDER ===
    return ( 
        <TodoContext value={ContextMemo} >
            {children}
        </TodoContext> 
    );
};

export default TodoContextWrapper;
