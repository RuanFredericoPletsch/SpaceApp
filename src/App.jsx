import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import bannerBackground from "./assets/banner.png"
import Banner from "./componentes/Banner/banner"
import Galeria from "./componentes/Galeria"
import fotos from './fotos.json'
import ModalZoom from "./componentes/ModalZoom"
import { useEffect, useState } from "react"
import Rodape from "./componentes/Rodape"

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
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  
  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLocaleLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  return(
  <FundoGradiente>
    <EstilosGlobais />
    <AppContainer>
      <Cabecalho 
        filtro={filtro}
        set={setFiltro}
      />
      <MainContainer>
        <BarraLateral />
          <ConteudoGaleria>
            <Banner 
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
            />
            <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
            aoAlternarFavorito={aoAlternarFavorito}
            fotos={fotosDaGaleria}
            setTag={setTag}/>
          </ConteudoGaleria>
      </MainContainer>
    </AppContainer>
    <Rodape />
    <ModalZoom 
      foto={fotoSelecionada} 
      aoFechar={() => setFotoSelecionada(null)}
      aoAlternarFavorito={aoAlternarFavorito}/>
  </FundoGradiente>
  )
} 

export default App
