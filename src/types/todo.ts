export interface Todo {
  id: string
  date: Date
  text: string
  completed: boolean
}

export interface CreateTodoPayload {
  text: Todo['text']
  date: Todo['date']
}
