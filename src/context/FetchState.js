import React, { useCallback, useState } from "react";

const state = {
  message: "",
  status: null,
};

const FetchStateContext = React.createContext({ ...state });

const FetchStateDispatchContext = React.createContext({
  setFetchInfo: (info) => {},
  resetFetchInfo: () => {},
});

const FecthStateProvider = ({ children }) => {
  const [context, setContext] = useState({...state});

  const fetchStateContextUpdater = {
    setFetchInfo: useCallback((state) => setContext({ ...state }), []),
    resetFetchInfo: () => setContext({}),
  };

  return (
    <FetchStateContext.Provider value={context}>
      <FetchStateDispatchContext.Provider value={fetchStateContextUpdater}>
        {children}
      </FetchStateDispatchContext.Provider>
    </FetchStateContext.Provider>
  );
};

const useFetchState = () => {
  const context = React.useContext(FetchStateContext);
  if (context === undefined) {
    throw new Error("useFetchState must be used within a FetchStateProvider");
  }
  return context;
};

const useFetchDispatch = () => {
  const context = React.useContext(FetchStateDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useFetchDispatch must be used within a FetchDispatchProvider"
    );
  }
  return context;
};

export { FecthStateProvider, useFetchDispatch, useFetchState };
