import React from 'react'
import pessoaCriandoSite from '../../assets/img/pessoa-criando-site.svg'
import styles from './Home.module.css'
import Button from '../form/Button'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div>
        <h1>Aprenda <br/>JavaScript do<br/> zero</h1>
        <p>Curso gratuito para iniciantes com certificado</p>
        <Button text='Comece agora' type='button' onClick={() => navigate('/comeceAgora')}/>
      </div>
      <div>
        <img src={pessoaCriandoSite} alt="Pessoa criando site" />
      </div>
    </section>
  )
}

export default Home
