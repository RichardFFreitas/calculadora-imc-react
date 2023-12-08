import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Tabela from "./components/Tabela"
import Peso from "./components/Peso"
import Altura from "./components/Altura"
import Calcular from "./components/Calcular"
import Resultado from "./components/Resultado"





function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <>
      <Header/>
      <Peso p = {peso} sp = {setPeso}/>
      <Altura altura = {altura} setAltura = {setAltura} />
      <Calcular peso = {peso} altura = {altura} setResultado = {setResultado}/>
      <Resultado r ={resultado} />
      <Tabela />
    </>
  )
}

export default App
