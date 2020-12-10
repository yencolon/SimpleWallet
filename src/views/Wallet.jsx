import React from "react";
import AddCredit from "../components/AddCredit";
import CheckCredit from "../components/CheckCredit";

const Wallet = () => {
  const [showCredit, setShowCredit] = React.useState(true);
  return (
    <div className="flex flex-col justify-around items-center pt-10">
      <div className="bg-gray-400 rounded flex flex-row justify-around">
        <button
          onClick={() => setShowCredit(true)}
          className={`${
            !showCredit ? "bg-yellow-400" : "bg-yellow-600"
          } text-center p-3 focus:outline-none active:bg-green-700`}
        >
          Consultar
        </button>
        <button
          onClick={() => setShowCredit(false)}
          className={`${
            showCredit ? "bg-yellow-400" : "bg-yellow-600"
          } text-center p-3 focus:outline-none active:bg-green-700`}
        >
          Recargar
        </button>
      </div>
      {!showCredit && <AddCredit />}
      {showCredit && <CheckCredit />}
    </div>
  );
};

export default Wallet;
