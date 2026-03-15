import logo from '../assets/logo-placeholder.png'
import './style/Logo.css'

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
  );
}

export default Logo;