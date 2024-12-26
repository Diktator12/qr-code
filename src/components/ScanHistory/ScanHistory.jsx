import { QRCodeSVG } from 'qrcode.react'
import { SCAN_DATA } from '../../constants'
import styles from './ScanHistory.module.css'
import { Link } from 'react-router-dom'
import CopyToClipboard from 'react-copy-to-clipboard'

const ScanHistory = () => {
   const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

   return (
      <div className={styles.container}>
         {data.map((text) => (
            <p key={text} className={styles.item}>
               <div className={styles.qr}>
                  <QRCodeSVG value={text} size={100} />
               </div>
               <div className={styles.qrtextcopy}>
                  <Link to={text} target="_blank" className={styles.qrtextlink}>
                     {text}
                  </Link>
                  <CopyToClipboard
                     text={text}
                     className={styles.copytoclipboard}
                  >
                     {text ? <button>Скопировать</button> : <p></p>}
                  </CopyToClipboard>
               </div>
            </p>
         ))}
      </div>
   )
}

export default ScanHistory
