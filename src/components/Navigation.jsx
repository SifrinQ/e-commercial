import './style/Navigation.css'
import cartImg from '../assets/cart.png'

function Navigation({ onTabChange }) {
    return (
        <div className="navigation"> 
            <div className="nav-buttons">
                <button className="btn" onClick={() => onTabChange('about')}>About US</button>
                <button className="btn" onClick={() => onTabChange('products')}>Shop</button>
                <button className="btn" onClick={() => onTabChange('contact')}>Contact</button>
            </div>
            {/* <img src={cartImg} className="cart-icon" alt="Cart" /> */}
        </div>
  );
}

export default Navigation;