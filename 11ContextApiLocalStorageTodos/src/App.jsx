import { useEffect, useState } from "react"
import { TodoProvider } from "./context"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos( (prevTodos) => prevTodos.map((currTodo) => (
      currTodo.id === id ? todo: currTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((currTodo) => (
      currTodo.id !== id
    )))
  }

  const markCompleted = (id) => {
    setTodos((prevTodos) => prevTodos.map(currTodo => currTodo.id === id ? { ...currTodo, completed: !currTodo.completed}: currTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, markCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map( todo => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}/>
                </div>
              )) }
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
