import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/ecart-logo-color.png";

const Header = () => {
  const menuItems = [
    // { url: "/", text: "Home" },
    { url: "/contact", text: "Contact" },
    { url: "/cart", text: "Cart" },
  ];
  return (
    <header>
      <nav>
        <Link to="/">
          {" "}
          <img className="logo" src={Logo} alt="Logo" />
        </Link>

        <ul>
          {menuItems.map((item) => (
            <li key={item.text}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
