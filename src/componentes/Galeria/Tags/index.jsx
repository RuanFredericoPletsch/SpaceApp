import styled from 'styled-components';
import tags from './tags.json';

const NavTextoEstilizado = styled.p`
    color: #D9D9D9;
    font-family: 'Gandhi Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 219px;
`

const NavTagsEstilizado = styled.section`
    display: flex;
    justify-content: flex-start;
`

const Tag = styled.button`
    margin: 12px;
    padding: 10px 8px;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border-radius: 10px;
    border: 2px solid transparent;
    background: rgba(217, 217, 217, 0.30);
    color: #FFF;
    text-align: center;
    font-family: 'Gandhi Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
      border-color: #C98CF1;
    }
    box-sizing: border-box;
`

const Tags = () => {
    return <>
            <NavTagsEstilizado>
                <NavTextoEstilizado>Busque por tags:</NavTextoEstilizado>
                {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
            </NavTagsEstilizado>
    </>
}

export default Tags