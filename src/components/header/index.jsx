import Logo from "../../assets/images/ecart-logo-color.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../CartContext";

const Header = () => {
  const { state, dispatch } = useCart();

  return (
    <header>
      <nav className="flex justify-between">
        <Link to="/">
          <img className="h-20" src={Logo} alt="Logo" />
        </Link>

        <ul className="flex gap-10 items-center">
          <li>
            <Link to="/contact">
              <span className="pe-2">Contact</span>
              <span className="p-2 bg-brand-orange rounded-full">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </Link>
          </li>

          <li className="flex gap-x-2">
            <Link to="/cart">
              {state.totalItems === 0 ? (
                <span className="pe-2">Cart</span>
              ) : state.totalItems === 1 ? (
                <span className="pe-2">{state.totalItems} item</span>
              ) : (
                <span className="pe-2">{state.totalItems} items</span>
              )}
              <span className="p-2 bg-brand-orange rounded-full">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
