import React from 'react'
import Lista from '../layout/Lista'
import styles from './Sobre.module.css'

const Sobre = ({referenciaRolagem}) => {
  return (
    <section className={styles.section} id='sobre' ref={referenciaRolagem}>
      <div>
        <h2>Sobre</h2>
        <p>Você sempre quis aprender a programar, mas não sabia por onde começar? Este curso gratuito de JavaScript foi feito exatamente para iniciantes como você!
        Aqui, você vai entender desde os conceitos básicos até a criação de pequenos projetos práticos, tudo de forma clara e sem enrolação.</p>
        <p>Durante o curso, você vai aprender:</p>
      </div>
      <div>
        <Lista text='O que é JavaScript e por que ele é tão importante para web'/>
        <Lista text='Variáveis, tipos de dados e estruturas de controle'/>
        <Lista text='Funções, eventos e manipulação do DOM'/>
        <Lista text='Como criar seus primeiros projetos interativos com HTML, CSS e JS'/>
        <Lista text='Dicas práticas para seguir aprendendo sozinho'/>
      </div>
      <p>Não é necessário nenhum conhecimento prévio — basta ter vontade de aprender e um navegador atualizado. Ao final, você terá a base necessária para seguir rumo ao desenvolvimento web profissional.</p>
    </section>
  )
}

export default Sobre
