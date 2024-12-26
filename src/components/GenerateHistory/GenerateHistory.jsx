import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from '../../constants'
import styles from './GenerateHistory.module.css'

const GenerateHistory = () => {
   const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

   console.log(data)

   return (
      <div className={styles.container}>
         {data.map((text) => (
            <p key={text} className={styles.item}>
               <div className={styles.qr}>
                  <QRCodeSVG value={text} size={100} />
               </div>
               <div className={styles.text}>{text}</div>
            </p>
         ))}
      </div>
   )
}

export default GenerateHistory
