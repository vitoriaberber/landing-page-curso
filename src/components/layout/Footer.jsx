import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/vit%C3%B3ria-berber" target='_blank'><FaLinkedin/></a>
            </li>

            <li>
                <a href="https://github.com/vitoriaberber" target='_blank'><FaGithub/></a>
            </li>

            <li>
                <a href="#"><CiImport/></a>
            </li>
        </ul>
        <p>Vitória Berber &copy; 2025</p>
    </footer>
  )
}

export default Footer
