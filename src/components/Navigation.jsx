import './style/Navigation.css'

function Navigation({ onTabChange }) {
    return (
        <div className="navigation"> 
            <button className="btn" onClick={() => onTabChange('about')}>About</button>
            <button className="btn" onClick={() => onTabChange('products')}>Products</button>
            <button className="btn" onClick={() => onTabChange('contact')}>Contact</button>
        </div>
  );
}

export default Navigation;