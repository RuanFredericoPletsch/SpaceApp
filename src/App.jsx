import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import bannerBackground from "./assets/banner.png"
import Banner from "./componentes/Banner/banner"
import Galeria from "./componentes/Galeria"
import fotos from './fotos.json'
import ModalZoom from "./componentes/ModalZoom"
import { useState } from "react"

const FundoGradiente = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(175deg, #041833 3.85%, #154580 115.67%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px; //original do figma = 1440px --- melhor do meu monitor = 1800px
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  return(
  <FundoGradiente>
    <EstilosGlobais />
    <AppContainer>
      <Cabecalho />
      <MainContainer>
        <BarraLateral />
          <ConteudoGaleria>
            <Banner 
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
            />
            <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
      </MainContainer>
    </AppContainer>
    <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)}/>
  </FundoGradiente>
  )
} 

export default App
