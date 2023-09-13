import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"

const FundoGradiente = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(175deg, #041833 3.85%, #154580 115.67%);
  width: 100%;
  min-height: 100vh;
`

  function App() {
    return(
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
    </FundoGradiente>
    )
  } 

export default App
