import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
   return (
      <nav className={styles.container}>
         <div className={styles.block1}>
            <Link to='/generate' className={styles.button}>Генерировать QR-код</Link>
            <Link to='/scan' className={styles.button}>Сканировать QR-код</Link>
         </div>
         <div className={styles.block2}>
            <Link to='/gen_history' className={styles.button}>История генерирования</Link>
            <Link to='/scan_history' className={styles.button}>История сканирования</Link>
         </div>
      </nav>
   )
}

export default Navigation
