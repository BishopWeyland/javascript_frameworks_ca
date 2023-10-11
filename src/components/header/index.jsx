import "./style.scss";
import Logo from "../../assets/images/ecart-logo-color.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const menuItems = [
    { url: "/contact", text: "Contact", icon: faEnvelope },
    { url: "/cart", text: "Cart", icon: faShoppingCart },
  ];

  return (
    <header>
      <nav className="flex justify-between">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>

        <ul>
          {menuItems.map((item) => (
            <li key={item.text}>
              <Link to={item.url}>
                {item.text}
                <FontAwesomeIcon className="menu-icon" icon={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
