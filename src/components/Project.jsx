import styled, {css} from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 130px;
  `;
const Wide = styled.div`
  width: 92%;
  position: relative;
  
  img{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
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
    /* height: 600px; */
    max-height: 600px;
    object-fit: contain;
    border-radius: 15px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    text-align: left;

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


export default function Project({tecnologies, mainImg, leftImg, title, liveCode, sourceCode, description, $btnColor }) {
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
      <div>
        <p><span>Description:</span>{description}</p>
        <p><span>Tecnologies used:</span>{tecnologies}</p>
      </div>
      </DivRight>
    </BottomContainer>

    </Container>
  )
}
