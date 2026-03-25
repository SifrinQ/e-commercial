import './style/Navigation.css'
import logo from '../assets/logo-placeholder.png'

function Navigation({ onTabChange }) {
    return (
        <header className="navigation"> 
            <div className="nav-inner">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav-buttons">
                    <button className="btn" onClick={() => onTabChange('about')}>About US</button>
                    <button className="btn" onClick={() => onTabChange('products')}>Shop</button>
                    <button className="btn" onClick={() => onTabChange('contact')}>Contact</button>
                </div>
            </div>
        </header>
  );
}

export default Navigation;