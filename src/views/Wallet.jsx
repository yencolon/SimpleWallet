import React from "react";
import AddCredit from "../components/AddCredit";
import CheckCredit from "../components/CheckCredit";

const Wallet = () => {
  return (
    <div className='flex flex-row justify-around items-center'>
      <CheckCredit />
      <AddCredit />
    </div>
  );
};

export default Wallet;
