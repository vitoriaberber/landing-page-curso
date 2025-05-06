import React from 'react'
import styles from './Main.module.css'

const Main = (props) => {
  return (
    <main className={`${styles.main}`}>
      {props.children}
    </main>
  )
}

export default Main
