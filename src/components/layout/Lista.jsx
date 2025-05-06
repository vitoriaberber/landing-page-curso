import React from 'react'
import { FaCheck } from "react-icons/fa";
import styles from './Lista.module.css'

const Lista = ({text}) => {
  return (
    <ul className={styles.ul}>
        <li><FaCheck/>{text}</li>
    </ul>
  )
}

export default Lista
