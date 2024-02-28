
import { useInView } from 'react-intersection-observer';


export default function useIntersectionOverver() {

  const { ref: blogRefImg, inView: inViewBlogImg } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: blogRefInfo, inView: inViewBlogInfo } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: shopRefImg, inView: inViewShopImg } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: shopRefInfo, inView: inViewShopInfo } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: fipeRefImg, inView: inViewFipeImg } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: fipeRefInfo, inView: inViewFipeInfo } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: titleRef, inView: inViewTitle } = useInView({
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true,
  });


  return { 
    blogRefImg, 
    shopRefImg, 
    fipeRefInfo, 
    blogRefInfo, 
    shopRefInfo,
    fipeRefImg,
    inViewBlogImg,
    inViewBlogInfo, 
    inViewShopImg, 
    inViewFipeInfo, 
    inViewFipeImg,
    inViewShopInfo,
    titleRef,
    inViewTitle
  }
}



