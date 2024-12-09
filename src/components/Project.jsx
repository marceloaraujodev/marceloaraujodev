import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from './useIntersectionObserver';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 130px;

  @media screen and (max-width: 768px){
    margin-bottom: 80px;
  }
  `;
  // main image
  const Wide = styled(motion.div)`
  width: 92%;
  position: relative;
  
  img{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    width: 100%;
    border-radius: 5px;
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
  /* overflow: hidden; */
  
  @media screen and (max-width: 768px){
    flex-wrap: wrap;
  }
  
  `;
const Divleft = styled(motion.div)`
  width: 60%;

  /* border: 1px solid red; */
  img{
    width: 100%;
    /* height: 600px; */
    max-height: 100%;
    object-fit: contain;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
  `;

  const DivRight = styled(motion.div)`
    border-radius: 5px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
    gap: 15px;
    background-color: #e8e8e8;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    text-align: left;
  

    h1{
      font-weight: 600;
      margin-top: 10px;
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

const DescriptionContainer = styled.div`
  overflow-y: auto;
  height: 295px;
  max-height: 100%;
  scrollbar-color: rgb(75, 75, 75) rgb(214, 214, 214);
  scrollbar-width: thin;
  word-break: break-word;
  /* background-color: blue; */
  
  /* &::-webkit-scrollbar{
    width: 5px;
    height: 8px;
    background-color: #aaa; 
  } */

  p{
    font-size: .8rem;
    margin-top: 10px;
  }
  @media screen and (max-width: 1399px){
    height: 245px;
  }
  @media screen and (max-width: 1200px){
    height: 205px;
  }
  @media screen and (max-width: 992px){
    height: 125px;
  }

  `;

// const ScrollableDescription = styled.div`
//   /* overflow-y: auto;
//   max-height: 180px; */
//   font-size: .8rem;
// `;


export default function Project({tecnologies, mainImg, leftImg, title, liveCode, sourceCode, description, $btnColor }) {

    const { 
      divWidetRef,
      inViewDivWide,
      divLeftRef,
      inViewDivLeft,
      divRightRef,
      inViewDivRight,
    
    } = useIntersectionObserver();

  return (
    <Container>
    <Wide ref={divWidetRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inViewDivWide ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <img src={mainImg} alt='' />
      <ButtonContainer>
        <a href={liveCode} target='blank'><Btn $btnColor={$btnColor} id='btnMainImg'>Live Code</Btn></a>
        <a href={sourceCode} target='blank'><Btn $btnColor={$btnColor} id='btnMainImg'>Source Code</Btn></a>
      </ButtonContainer>
    </Wide>
    <BottomContainer>
      <Divleft ref={divLeftRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inViewDivLeft ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      ><img src={leftImg} alt=''/></Divleft>
      <DivRight ref={divRightRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inViewDivRight ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      ><h1>{title}</h1>
      <DescriptionContainer dangerouslySetInnerHTML={{ __html: description }}/>
      </DivRight>
    </BottomContainer>

    </Container>
  )
}
