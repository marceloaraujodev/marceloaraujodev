import Button from './Button';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Container = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  
  margin: 0 auto;
  align-items: center;
  gap: 20px;
  border-radius: 5px;

`;

const Wide = styled(motion.div)`
  /* width: 75%;
  position: relative;
  padding: 10px 0; */

  /* p {
    text-align: center;
    margin-top: 30px;
    font-weight: 600;
  } */

  /* button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    transition: all 0.7s ease;
    margin-bottom: 10px;
  } */

  /* button:hover {
    transform: scale(1.1);
  } */
`;

export default function Resume() {

  const { ref, inView } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
    <Container>
      {/* <Wide> */}
      <div className={`resume-container ${inView ? 'animated2 ' : ''} `} id='resume' ref={ref}>
      <div className={`resume `} >
      <Button text={'Resume'} href='https://drive.google.com/file/d/1wBcP-MWsWjnDz7hRzmJyD97mStEcIuQd/view?usp=sharing' />
      </div>
      </div>

      {/* </Wide> */}
    </Container>
    </>
  );
}
