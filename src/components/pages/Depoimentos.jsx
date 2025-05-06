import React from "react";
import styles from "./Depoimentos.module.css";
import { ImQuotesLeft } from "react-icons/im";

const Depoimentos = ({referenciaRolagem}) => {
  return (
    <section id='depoimentos' className={styles.section} ref={referenciaRolagem}>
      <h2>Depoimentos</h2>
      <div>
        <ImQuotesLeft />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt
          sapiente laudantium quisquam quod suscipit? Saepe ratione enim sit
          laboriosam officia. Sunt repudiandae, pariatur dolorum adipisci
          blanditiis veritatis doloribus nemo!
        </p>
        <p className={styles.autor}>lorem ipsum dolor</p>
      </div>

      <div>
        <ImQuotesLeft />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt
          sapiente laudantium quisquam quod suscipit? Saepe ratione enim sit
          laboriosam officia. Sunt repudiandae, pariatur dolorum adipisci
          blanditiis veritatis doloribus nemo!
        </p>
        <p className={styles.autor}>lorem ipsum dolor</p>
      </div>
    </section>
  );
};

export default Depoimentos;
