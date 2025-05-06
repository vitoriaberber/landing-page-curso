import React, { useState } from 'react'
import Input from '../form/Input'
import styles from './Inscrever.module.css'
import Button from '../form/Button'
import {useRef, useEffect} from 'react';

const Inscrever = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  let dados = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];

  const enviar = (e) => {
    e.preventDefault()
    if(nome.trim() === ''){
      alert('Insira um nome válido')
      return
    }

    if(!email.includes('@') || email.length < 10){
      alert('Insira um email válido')
      return
    }

    if(senha.length < 6){
      alert('Insira uma senha maior')
      return
    }

    const objetoDados = {
      nome,
      email,
      senha
    }

    dados.push(objetoDados)
    alert('Dados enviados com sucesso')
    localStorage.setItem(('dados'), JSON.stringify(dados))
  }

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <section className={styles.section}>
      <h1>Inscreva-se</h1>
      <form onSubmit={enviar}>
        <Input type='text' name='nome' text='Nome:' placeholder='Escreva seu nome' value={nome} onChange={(e) => setNome(e.target.value)} referencia={inputRef}/>
        <Input type='email' name='email' text='Email:' placeholder='seunome@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type='password' name='senha' text='Senha:' value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <Button type='submit' text='Enviar' customClass='container'/>
      </form>
    </section>
  )
}

export default Inscrever
