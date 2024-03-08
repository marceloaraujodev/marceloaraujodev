import Button from './Button';
import useIntersectionObserver from './useIntersectionObserver';

export default function ShopCartProject() {

  const { 
    shopRefImg,
    shopRefInfo,
    inViewShopImg,
    inViewShopInfo
  
  } = useIntersectionObserver();

  return (
    <section className='projects'>
    <div >
      <img
        ref={shopRefImg}
        className={`projects-images ${inViewShopImg ? 'animated3' : ''}`}
        src={`/product-cart-page.png`}
        alt="project image"
      />
    </div>
    <div className={`projects-info ${inViewShopInfo ? 'animated4' : ''}`} ref={shopRefInfo}>
      <p className="projects-item-title">Frontend Shopping Cart</p>
      <p className="projects-description">Frontend shopping cart page, with a header. Calculates the values if user enters more than one product and automatically updates the cart with prices. Deletes items from the cart. Gallery page, with thumbnails, hero picture and also includes a modal when doubled clicked on the main image, gallery is fully functional on modal as well.</p>
      <div className="projects-langagues">Vanilla Javascript, CSS, HTML</div>
      <div className="btn-container">
        <Button text='Live Code' href="https://shopcartpage.onrender.com/" />
        <Button text="Source Code" href="https://github.com/marceloaraujodev/shopCartPage" />
      </div>
    </div>
  </section>
  )
}
