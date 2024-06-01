
import { useInView } from 'react-intersection-observer';


export default function useIntersectionOverver() {

  const { ref: divWidetRef, inView: inViewDivWide } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: divLeftRef, inView: inViewDivLeft } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: divRightRef, inView: inViewDivRight } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  // const { ref: blogRefImg, inView: inViewBlogImg } = useInView({
  //   rootMargin: '0px',
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  // const { ref: blogRefInfo, inView: inViewBlogInfo } = useInView({
  //   rootMargin: '0px',
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  // const { ref: shopRefImg, inView: inViewShopImg } = useInView({
  //   rootMargin: '0px',
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  // const { ref: shopRefInfo, inView: inViewShopInfo } = useInView({
  //   rootMargin: '0px',
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  // const { ref: fipeRefImg, inView: inViewFipeImg } = useInView({
  //   rootMargin: '0px',
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  // const { ref: fipeRefInfo, inView: inViewFipeInfo } = useInView({
  //   rootMargin: '0px',
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  // const { ref: titleRef, inView: inViewTitle } = useInView({
  //   rootMargin: '0px',
  //   threshold: 0,
  //   triggerOnce: true,
  // });


  return { 
    divLeftRef,
    inViewDivLeft,
    divWidetRef,
    inViewDivWide,
    divRightRef,
    inViewDivRight,
  }
}



