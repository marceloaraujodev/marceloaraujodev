import Button from './Button';
import { useInView } from 'react-intersection-observer';

export default function Resume() {

  const { ref, inView } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <div className={`resume-container ${inView ? 'animated2 ' : ''} `} id='resume' ref={ref}>
      <div className={`resume `} >
      <Button text={'Resume'} href='' />
      </div>
      </div>
    </>
  );
}
