import logo from '../assets/logo-placeholder.png'
import itemPlaceholder from '../assets/item-placeholder.png'
import products from '../data/products'
import './style/About.css'

function About({ onTabChange }) {
  const brandItems = ['WALMART', 'TARGET', 'AMAZON', 'COSTCO', 'BEST BUY', 'MACYS']

  return (
    <section className="aboutPage">
      <div className="aboutHero">
        <div className="aboutIntro">
          <p className="aboutEyebrow">About Us</p>
          <h1 className="aboutTitle">Providing exceptional goods for your everyday life</h1>
          <p>
            We are dedicated to sourcing and delivering high-quality, durable
            products that bring real value and comfort to your home.
          </p>
          <a className="aboutCta" onClick={() => onTabChange('products')} href="#">Shop collection</a>
        </div>

        <div className="aboutVisuals">
          <img className="mainVisual" src={itemPlaceholder} alt="Our products" />
          <div className="breakoutCard">
            <img src={logo} alt="Company logo" />
            <h3>Quality guaranteed</h3>
            <p>Carefully selected materials, strict quality control, and fast shipping.</p>
          </div>
          <img className="secondaryVisual" src={logo} alt="Store interior" />
        </div>
      </div>

      <section className="trustedBlock" aria-label="Trusted by clients">
        <div className="carouselHeading">
          <p>Featured in top global retail networks</p>
        </div>

        <div className="trustedViewport">
          <div className="trustedTrack">
            {[...brandItems, ...brandItems].map((brand, index) => (
              <span key={`${brand}-${index}`}>{brand}</span>
            ))}
          </div>
        </div>
      </section>


      <section className="statsBlock">
        <div className="statsHeading">
          <h2>Our Achievements in Numbers</h2>
          <p>
            Consistent growth, reliable supply chains, and thousands of orders safely delivered worldwide.
          </p>
        </div>

        <div className="statsGrid">
          <article className="statItem">
            <p className="statValue">5k+</p>
            <p className="statLabel">Products Sold</p>
          </article>
          <article className="statItem">
            <p className="statValue">50+</p>
            <p className="statLabel">Partner Brands</p>
          </article>
          <article className="statItem">
            <p className="statValue">99%</p>
            <p className="statLabel">Positive Reviews</p>
          </article>
          <article className="statItem">
            <p className="statValue">24/7</p>
            <p className="statLabel">Customer Support</p>
          </article>
        </div>
      </section>


      <section className="productCarouselBlock" aria-label="Popular products carousel">
        <div className="carouselHeading">
          <p>Popular products</p>
        </div>

        <div className="productViewport">
          <div className="productTrack">
            {[...products, ...products].map((product, index) => (
              <article key={`${product.id}-${index}`} className="miniProductCard">
                <div className="miniProductImageWrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>${product.price.toFixed(2)}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </section>
  )
}

export default About
