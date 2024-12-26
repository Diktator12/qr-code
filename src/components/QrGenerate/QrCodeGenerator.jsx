import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import s from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants'

const QrCodeGenerator = () => {
   const [value, setValue] = useState('')
   const [result, setResult] = useState('')

   const onClickHandler = () => {
      const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

      localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))

      setResult(value)
      setValue('')
   }

   const onChangeHandler = (event) => {
      setValue(event.target.value)
      setResult('')
   }

   return (
      <div className={s.container}>
         {result !== '' && (
            <div className={s.qrWrapper}>
               <QRCodeSVG value={result} size={200} />
            </div>
         )}
         <input
            type="text"
            value={value}
            placeholder="Введите текст..."
            onChange={onChangeHandler}
            className={s.input}
         />
         <div className={s.twobuttons}>
            <button onClick={onClickHandler} className={s.button}>
               Сгенерировать QR
            </button>
         </div>
      </div>
   )
}

export default QrCodeGenerator
