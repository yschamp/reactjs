# History

React (core library)  - React-dom (wiring/ binding for web based apps)
                      - React-native (binding for mobile apps)

Redux (core library)  - React-redux (binding for react apps)
                      - Vue-redux (binding for vue apps)
                      - angular-redux (binding for angular apps)

1. There are two ways to create components in react
    - Functional component
    - Class based component (deprecated)
    Note: We have not covered class based component extensively since it is deprecated

2. Similarly, we do not use redux core library anymore since it involves a lot of boilerplate configuration that is time consuming. Also, we had to install other dev tools, redux thunk and redux saga to improve dev experience. We use its extended version i.e. Redux-ToolKit (no boilerplate, includes redux thunk and dev tools)

3. There is a major flaw in the apps we have built till now. Imagine we have a dashboard. The outermost component hits a third party api and fetches some image. Now that image is to be displayed in one of the cards that gets shown in blinkit. We need a way to send this image from outermost dashboard component to innermost card component that consumes it. The only method we know till now is passing the components from parent to children in props. Assuming that the child component is 100s of component deep, we will have to pass this image as props in all the components that lie between dashboard and card. This is unnecessary and inefficient since the middle components are just forwarding without any utility. We need a state management tool that could do this for us

4. The solution to this problem came in form of context api where we create a global variable and any component that has the permission can access the values from there. This involved creating a context i.e. global variable with default values, creating a context provider (a component) that will provide these values to its child components, creating values in this store and passing them as props from provider in value attribute. Context api was helpful, however there were many drawbacks of using it like inefficency, a lot of code when writing complex scalable apps.

5. Later, Facebook developed a tool i.e. Flux to manage state. The major advantage of Flux was that apart from providing a global store, it emphasises on data flow. It was observed that context api had a major flaw i.e. when a component decides to update the value stored in global store, it had to carefully destructure the existing state and then update the relevant data. Incase we forget to destructure the existing state, it will be overwritten and change the state completely resulting in code break and unpleasant experience for end users. With data flow, Flux enabled us to send the data that we want update and it will automatically take care that exisiting data is not overwritten with intention. 

6. Next, came Redux. Redux is a state management tool for JS Apps. It works on the philosophy - state is immutable, store is the single source of truth. It also introduced concept of one-way for updating state in store. Previously, we have seen that in context api, any component that wants to access the store needs to be enclosed within a provider. This provider provides state and functions to update these values. Different providers have separate implementations of these functions to mutate the state resulting in unexpected behaviour. Therefore, redux allows single implementation of functions(reducers). Anyone who wants to update the state can do so solely using reducers.


Redux - Store
            - Reducers
                - useSelector (to fetch values from store)
                - useDispatch (to update values to store)


Steps:
1. Create a store
    ```Javascript
    import { configureStore } from "@reduxjs/toolkit";
    const store = configureStore({})
    ```
2. Create a slice

    ```Javascript
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
                state.todos.filter((todo => ( todo.id !== action.payload)))
            }
        }
    })

    export const { addTodo, deleteTodo } = todoSlice.actions

    export default todoSlice.reducer

    // state is the current value in store
    // the parameters can be supplied through action
    
    ```

3. Register the slice with store so that reducers are allowed to acces and update the store

    ```Javascript
    import { configureStore } from "@reduxjs/toolkit";
    import todoReducer from '../features/todo/todoSlice'

    const store = configureStore({
        reducer: todoReducer
    })

    export default store
    ```

4. Provide the store access to the components (enclose between provider with store component)

    ```Javascript
    import AddTodo from './components/AddTodo.jsx'
    import Todos from './components/Todos.jsx'

    createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AddTodo/>
        <Todos/>
    </Provider>,
    )

    ```
5. Now we can access the state using useSelector and update the state using useDispatch

    ```Javascript
    import React from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import {deleteTodo } from '../features/todo/todoSlice'

    function Todos() {
        const todos = useSelector(state => state.todos)
        const dispatch = useDispatch()
    return (
        <>
        <div>Todos</div>
        <ul className="list-none">
            {todos.map((todo) => (
            <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
            >
                <div className='text-white'>{todo.text}</div>
                <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
                </button>
            </li>
            ))}
        </ul>
        </>
    )
    }

    export default Todos
    ```