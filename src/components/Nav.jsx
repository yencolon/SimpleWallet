import React from "react";
import { Link } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context/AuthState";
const Nav = () => {
  const {  resetAuthInfo } = useAuthDispatch();
  const auth = useAuthState();
  return (
    <nav className="bg-yellow-500 h-16 flex flex-row w-full items-center justify-between px-10">
      <h1 className="font-bold font-sans text-3xl text-gray-900">
        Wallet Test
      </h1>
      <ul className="font-semibold text-gray-900 text-base flex flex-row items-end justify-around">
        {auth.isLogged ? (
          <>
            <li className="mx-5">
              <Link to="/purchase">Compra</Link>
            </li>
            <li className="mx-5">
              <Link to="/wallet">Billetera</Link>
            </li>
            <li className="mx-5">
            <Link  onClick={resetAuthInfo}>Salir</Link>
          </li>
          </>
        ) : (
          <li className="mx-5">
            <Link to="/auth">Acceder</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
