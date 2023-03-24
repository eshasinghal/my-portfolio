import NavLinks from "./NavLinks";
import '../pages/header/header.css'
// import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Esha Singhal</div>
      <NavLinks />
    </header>
  );
};

export default Header;
