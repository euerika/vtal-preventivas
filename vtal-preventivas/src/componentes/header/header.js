import Logo from "../../../src/img/vtal-logo.png"
import "../../componentes/header/header.css"

export const Header = () => {
  return (
    <header className="header">     
         <img className="logo-vtal" alt="Logo" src={Logo} />
         <p>PARA TÉCNICOS</p>                
    </header>
  );
};
export default Header;