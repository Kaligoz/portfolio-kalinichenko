"use client"

import { useEffect, useState } from "react"
import styles from "./typing.module.css"

export const Typing = ({ text, speed, className}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= text.length) {
          clearInterval(interval)
          return prevCount
        }
        return prevCount + 1
      })
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [text, speed])

  const renderedText = text.slice(0, count)

  return (
    <p className={className}>
      {renderedText}
      <span className={styles.cursor}>|</span>
    </p>
  )
}
