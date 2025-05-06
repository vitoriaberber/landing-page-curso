import React from "react";
import { useEffect, useState } from "react";
import styles from './ComecarAgora.module.css'
import Links from '../layout/Links'

const ComecarAgora = () => {
let [contagemRegressiva, setContagemRegressiva] = useState(9000);
const [tempoFormatado, setTempoFormatado] = useState("")

useEffect(() => {
    const intervaloId = setInterval(() => {
        setContagemRegressiva(prevTempo => {
            if (prevTempo <= 0) {
                clearInterval(intervaloId);
                alert('Tempo Finalizado')
                return 0;
            } 
            return prevTempo- 1;
        })
        
    }, 1000);

    return () => clearInterval(intervaloId);
}, []);

useEffect(() => {
    const tempo = new Date(contagemRegressiva * 1000);
    const formatado = tempo.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
    });
    setTempoFormatado(formatado);
}, [contagemRegressiva])

return (
    <section className={styles.section}>
    <h1>O curso vai estar disponível em:</h1>
    <p>{tempoFormatado}</p>
    <Links to='/inscrever' texto='Inscreva-se agora'/>
    </section>
);
};

export default ComecarAgora;
