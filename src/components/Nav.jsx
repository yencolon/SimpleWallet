import React from "react";
import { Link } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context/AuthState";
import styled from "styled-components";
import tw from "twin.macro";

const StyledNav = styled.nav.attrs({
  className: `bg-yellow-500 h-16 flex flex-row w-full items-center justify-between px-10`,
})`
  & {
    h1 {
      ${tw`font-bold font-sans text-3xl text-gray-900`}
    }
    ul {
      ${tw`font-semibold text-gray-900 text-base flex flex-row items-end justify-around`}
    }
    li {
      ${tw`mx-5`}
    }
  }
`;

const Nav = () => {
  const { resetAuthInfo } = useAuthDispatch();
  const auth = useAuthState();
  return (
    <StyledNav>
      <h1>Wallet Test</h1>
      <ul>
        {auth.isLogged ? (
          <>
            <li>
              <Link to="/purchase">Compra</Link>
            </li>
            <li>
              <Link to="/wallet">Billetera</Link>
            </li>
            <li>
              <button onClick={resetAuthInfo}>Salir</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/auth">Acceder</Link>
          </li>
        )}
      </ul>
    </StyledNav>
  );
};

export default Nav;
