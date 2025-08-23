import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todos: [{ id: 1, text: 'Demo todo'}]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            const newTodo = {
                id: action.payload,
                text: action.payload
            }
            state.todos.map((todo) => (
                todo.id === action.payload.id ? newTodo : todo
            ))
        },
        deleteTodo: (state, action) => {
            console.log('print')
            state.todos = state.todos.filter((todo => ( todo.id !== action.payload)))
            console.log(state.todos)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer

// state is the current value in store
// the parameters can be supplied through action