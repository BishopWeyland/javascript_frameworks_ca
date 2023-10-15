import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseButton } from "../components/ButtonComponent";

function Checkout() {
  useEffect(() => {
    const hasRefreshed = localStorage.getItem("hasRefreshed");

    if (!hasRefreshed) {
      localStorage.setItem("hasRefreshed", "true");
      window.location.reload();
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-5xl my-4 md:my-8 self-center">
          Thank you for shopping at E-Cart!
        </h1>
        <span className="self-center">
          A confirmation has been sent to your e-mail.
        </span>
        <Link className="self-center" to="/">
          <BaseButton>Home</BaseButton>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
