import Image from 'next/image'
import styles from './page.module.css'

import face from "./face.jpg"
import { Typing } from '@/component/Typing'

export default function Home() {
  return (
        <>
          <div className={styles.faceposition}>
            <Image src={face} alt="face photo" className={styles.facepicture}/>
        </div>
        <div className={styles.borderface}>
        </div>
        <div>
          <Typing speed={150} text={"Portfolio"} className={styles.Headline}/>
        </div>
        <div>
            <Typing speed={40} text={"My name is Kalinichenko Gleb I am a student at the State University of Information and Communication Technologies. And welcome to my portfolio, hope you enjoy all the suffering I have endured."} className={styles.paragraphtext}/>
        </div>
        </>
  )
}
