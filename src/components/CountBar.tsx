import styles from './CountBar.module.css';

interface CountType {
  createdTask: number
  completedTask: number
  hasBorder?: boolean
}

export function CountBar({createdTask, completedTask, hasBorder = true}: CountType) {
  return (
    <div className={hasBorder ? styles.formBorder : styles.form}>
      <p className={styles.created}>Tarefas criadas <span>{createdTask}</span></p>
      <p className={styles.done}>
        Concluídas <span>{completedTask} {createdTask ? `de ${createdTask}` : ''}</span>
      </p>
    </div>
  )
}