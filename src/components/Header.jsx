import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { url: "/", text: "Home" },
    { url: "/contact", text: "Contact" },
  ];
  return (
    <header>
      <nav>
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
