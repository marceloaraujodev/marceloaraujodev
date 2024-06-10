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

      <div className={`resume-container ${inView ? 'animated2 ' : ''} `} id='resume' ref={ref}>
      <div className={`resume `} >
      <Button text={'Resume'} href='https://drive.google.com/file/d/1wBcP-MWsWjnDz7hRzmJyD97mStEcIuQd/view?usp=sharing' />
      </div>
      </div>
    </Container>
    </>
  );
}
