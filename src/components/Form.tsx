import { useState } from 'react';
import styles from './Form.module.css';

interface FormProps {
  onAddTodo: (title: string) => void;
}

export function Form({ onAddTodo }: FormProps) {
  const [taskText, setTaskText] = useState('');

  function handleonAddTodo() {
    if (taskText.trim() === '') {
      alert('Por favor, adicione uma tarefa válida.');
      return;
    }
    onAddTodo(taskText.trim());
    setTaskText('');
  }

  return (
    <div className={styles.form}>
      <input
        type="text"
        className={styles.btnText}
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        type="button"
        className={styles.btnCreate}
        onClick={handleonAddTodo}
      >
        Criar (+)
      </button>
    </div>
  );
}
