import styled from "styled-components"
import Titulo from "../../Titulo"

const PopularEstilizado = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 212px;
`

const ImagemEstilizada = styled.img`
    width: 212px;
    flex-shrink: 0;
    border-radius: 20px;
    margin-bottom: 20px;
`

const BotaoEstilizado = styled.button`
    width: 212px;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid transparent;
    background: rgba(217, 217, 217, 0.30);
    color: #FFF;
    text-align: center;
    font-family: 'Gandhi Sans', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
      border-color: #C98CF1;
    }
    box-sizing: border-box;
`

const Populares = () => {
    return(
    <PopularEstilizado>
        <Titulo $alinhamento="center">Populares</Titulo>
        <ImagemEstilizada src=".\public\imagens\populares\foto-1.png"/>
        <ImagemEstilizada src=".\public\imagens\populares\foto-2.png"/>
        <ImagemEstilizada src=".\public\imagens\populares\foto-3.png"/>
        <ImagemEstilizada src=".\public\imagens\populares\foto-4.png"/>
        <ImagemEstilizada src=".\public\imagens\populares\foto-5.png"/>
        <BotaoEstilizado>Ver mais</BotaoEstilizado>
    </PopularEstilizado>)
}

export default Populares