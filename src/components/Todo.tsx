import styles from './Todo.module.css';


export interface TodosType {
  id: number;
  title: string;
  done: boolean;
}

interface TodosProps {
  todo: TodosType;
  onStatusChange: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export function Todo({todo, onStatusChange, onDeleteTodo}: TodosProps){
  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  function handleStatusChange() {
    onStatusChange(todo.id);
  }

  return (
    <div className={styles.todo}>
      <input 
        type="checkbox" 
        checked={todo.done}
        onChange={handleStatusChange}
      />
      {todo.done ? (
        <p className={styles.textTodoDone}>{todo.title}</p>
      ) : (
        <p className={styles.textTodo}>{todo.title}</p>
      )}
      <button type='button' onClick={handleDeleteTodo} title="Deletar tarefa">X</button>
    </div>
  )
}