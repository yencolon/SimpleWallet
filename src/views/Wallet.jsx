import React from "react";
import AddCredit from "../components/AddCredit";
import CheckCredit from "../components/CheckCredit";
import styled from "styled-components";
import tw from "twin.macro";

const SyledContainer = tw.div`
flex flex-col justify-around items-center pt-10
`
const StyledSiwtch =  tw.div`bg-gray-400 rounded flex flex-row justify-around`

const StyledSwitchButton= styled.button`
  ${tw`text-center p-3 focus:outline-none active:bg-green-700`}
  ${b => b.active ?  tw`bg-yellow-400` : tw`bg-yellow-600`}
`

const Wallet = () => {
  const [showCredit, setShowCredit] = React.useState(true);
  return (
    <SyledContainer>
      <StyledSiwtch>
        <StyledSwitchButton
          onClick={() => setShowCredit(true)}
          active={!showCredit}
        >
          Consultar
        </StyledSwitchButton>
        <StyledSwitchButton
          onClick={() => setShowCredit(false)}
          active={showCredit}
        >
          Recargar
        </StyledSwitchButton>
      </StyledSiwtch>
      {!showCredit && <AddCredit />}
      {showCredit && <CheckCredit />}
    </SyledContainer>
  );
};

export default Wallet;
