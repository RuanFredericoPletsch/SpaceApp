import { styled } from 'styled-components';

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`
const CampoTextoEstilizado = styled.input`
        @import url('https://fonts.cdnfonts.com/css/gandhi-sans');
        background: none;
        border-radius: 10px;
        height: 56px;
        width: 566px;
        border: 2px solid #C98CF1;
        padding: 12px 16px;
        box-sizing: border-box;
        color: #D9D9D9;
        font-family: 'Gandhi Sans', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
`
const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ( {setFiltro} ) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado onChange={(evento) => { setFiltro(evento.target.value) }} type="text" placeholder="O que você procura?"/>
            <IconeLupa src='./imagens/lupa.svg' alt="Imagem de uma lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto