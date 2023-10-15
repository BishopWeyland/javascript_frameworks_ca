import React, { useContext } from "react";
import Logo from "../../assets/images/ecart-logo-color.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../CartContext";

const Header = () => {
  const { state } = useContext(CartContext);

  return (
    <header>
      <nav className="flex justify-between mb-5">
        <Link to="/">
          <img className="h-20" src={Logo} alt="Logo" />
        </Link>

        <ul className="flex gap-10 items-center">
          <li>
            <Link to="/contact">
              <span className="pe-2">
                <span className="me-3 hidden sm:inline hover:border-b-2 hover:border-black">
                  Contact
                </span>
                <span className="p-2 bg-brand-orange rounded-full">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </span>
            </Link>
          </li>

          <li className="flex gap-x-2">
            <Link to="/cart">
              <span className="pe-2 ">
                {state.totalItems !== null && !isNaN(state.totalItems) ? (
                  <span className="me-3 hidden sm:inline hover:border-b-2 hover:border-black">
                    {state.totalItems === 0
                      ? "Cart"
                      : state.totalItems === 1
                      ? `${state.totalItems} item`
                      : `${state.totalItems} items`}
                  </span>
                ) : (
                  <span className="me-3 hidden sm:inline">Cart</span>
                )}
                <span className="p-2 bg-brand-orange rounded-full">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="mr-2 md:mr-0"
                  />
                  <span className="sm:hidden">{state.totalItems}</span>
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
