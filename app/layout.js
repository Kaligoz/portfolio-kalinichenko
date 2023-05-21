import { Inter } from 'next/font/google'
import './global.css'
import styles from './page.module.css'

import geometryimage from "./Geo.svg"
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: ' ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className={styles.background}>
      <Image src={geometryimage} alt="Geometry image for backgroud" className={styles.backgroundimage}/>
      <Image src={geometryimage} alt="Geometry image for backgroud" className={styles.invertedbackgroundimage}/>
      <div className={styles.CUBE}>
        {children}
        <div className={styles.buttons}>
          <Link href="/" className={styles.buttonsstyle}>home</Link>
          <Link href="/projects" className={styles.buttonsstyle}>projects</Link>
          <Link href="/contact" className={styles.buttonsstyle}>contact me</Link>
        </div>
      </div>
      <div className={styles.pinkline}></div>
    </main>
      </body>
    </html>
  )
}
