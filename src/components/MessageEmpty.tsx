import styles from './MessageEmpty.module.css';

export function MessageEmpty(){
  return(
    <div className={styles.box}>
      <p>Icone</p>
      <p><b>Você ainda não tem tarefas cadastradas</b></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}