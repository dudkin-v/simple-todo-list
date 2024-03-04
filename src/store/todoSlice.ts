import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { Todo, CreateTodoPayload } from 'src/types/todo.ts'

interface InitialState {
  todos: Todo[]
}

const initialState: InitialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<CreateTodoPayload>) {
      state.todos.push({
        id: uuid(),
        completed: false,
        ...action.payload,
      })
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    toggleTodoCompleted(state, action: PayloadAction<string>) {
      const todo = state.todos.find((todo) => todo.id === action.payload)

      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
})

export const { createTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions
export default todoSlice.reducer
