import { Scanner } from '@yudiel/react-qr-scanner'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './qrCodeScanner.module.css'
import { SCAN_DATA } from '../../constants'

const QrCodeScanner = () => {
   const [scanned, setScanned] = useState('')

   const scanHandler = (result) => {
      setScanned(result[0].rawValue)

      const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

      localStorage.setItem(
         SCAN_DATA,
         JSON.stringify([...prevData, result[0].rawValue])
      )
   }

   return (
      <>
         <div className={style.container}>
            <Scanner
               onScan={scanHandler}
               components={{
                  audio: false,
                  finder: false,
               }}
               styles={{
                  container: {
                     width: 250,
                     height: 250,
                     marginBottom: 10,
                     border: '5px solid grey',
                     borderRadius: 5,
                  },
               }}
            />
            <div className={style.result}>
               <div className={style.textandlink}>
                  <p className={style.textlink}>
                     {scanned ? 'Ваша ссылка:' : ''}
                  </p>
                  <Link className={style.link} to={scanned} target='_blank'>
                     {scanned}
                  </Link>
               </div>
               <CopyToClipboard
                  className={style.copytoclipboard}
                  text={scanned}
               >
                  {scanned ? <button>Скопировать</button> : <div></div>}
               </CopyToClipboard>
            </div>
         </div>
      </>
   )
}

export default QrCodeScanner
