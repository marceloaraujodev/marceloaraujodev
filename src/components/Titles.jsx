import React from 'react'
import styled, {css} from 'styled-components';
import Button from './Button';

const Container = styled.div`
  width: 100%;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
`;
const Wide = styled.div`
  width: 92%;
  position: relative;
  img{
    object-fit: cover;
    width: 100%;
    border-radius: 15px;
  }
  `;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 20px;
  
  @media screen and (max-width: 768px){
    bottom: 10px;
  }
  `;

const Btn = styled.button`
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  transition: transform 1s ease;

  ${props => props.$btnColor && css`
    color: black;
    border: 2px solid black;
  `}
 
  & a {
  text-decoration: none;
  color: black;
  }
  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.1) translateZ(7px);
  }
  &:hover a {
    color: white;
  }
  @media screen and (max-width: 768px){
    font-size: 0.7rem;
    padding: 5px 10px;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 92%;
  
  @media screen and (max-width: 768px){
    flex-wrap: wrap;
  }
  
  `;
const Divleft = styled.div`
  width: 60%;
  /* border: 1px solid red; */
  img{
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
  `;

  const DivRight = styled.div`
    border-radius: 15px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    gap: 15px;
    background-color: #e8e8e8;

    h1{
      font-weight: 600;
      @media screen and (max-width: 768px){
        margin-top: 15px;
    }
    }

  span{
    font-weight: 600;
    margin-right: 5px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }

`;




export default function Titles({tecnologies, mainImg, leftImg, title, liveCode, sourceCode, $btnColor }) {
  return (
    <Container>
    <Wide>
      <img src={mainImg} alt='' />
      <ButtonContainer>
        <a href={liveCode} target='blank'><Btn $btnColor={$btnColor} id='btnMainImg'>Live Code</Btn></a>
        <a href={sourceCode} target='blank'><Btn $btnColor={$btnColor} id='btnMainImg'>Source Code</Btn></a>
      </ButtonContainer>
    </Wide>
    <BottomContainer>
      <Divleft><img src={leftImg} alt=''/></Divleft>
      <DivRight><h1>{title}</h1>
        <p><span>Tecnologies used:</span>{tecnologies}</p>
      </DivRight>
    </BottomContainer>

    </Container>
  )
}
