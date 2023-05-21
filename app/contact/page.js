import styles from './page.module.css'
import Link from 'next/link'

import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

export default function Contects() {
  return (
        <>
          <dev className={styles.contacts}>
            <p><HiMail/> Email: glebkalinichenkolol@gmail.com</p> 
            <p><FaInstagram/> Instagram: @kali_gmz1</p> 
            <p><FaGithub/> GitHub: <Link href="https://github.com/Kaligoz" className={styles.link}>https://github.com/Kaligoz</Link></p> 
            <p><FaTelegramPlane/> Telegram: <Link href="https://t.me/GlebKali" className={styles.link}>https://t.me/GlebKali</Link><span className={styles.terminalcursor}>|</span></p>  
          </dev>
        </>
  )
}
