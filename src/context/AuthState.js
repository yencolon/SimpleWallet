import React, { useCallback, useState } from "react";

const state = {
  user: null,
  isLogged: false
};

const AuthStateContext = React.createContext({ ...state });

const AuthStateDispatchContext = React.createContext({
  setAuthInfo: (info) => {},
  resetAuthInfo: () => {},
});

const AuthStateProvider = ({ children }) => {
  const [context, setContext] = useState({...state});

  const authStateContextUpdater = {
    setAuthInfo: useCallback((state) => setContext({ ...state }), []),
    resetAuthInfo: () => setContext({}),
  };

  return (
    <AuthStateContext.Provider value={context}>
      <AuthStateDispatchContext.Provider value={authStateContextUpdater}>
        {children}
      </AuthStateDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthStateProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = React.useContext(AuthStateDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useAuthDispatch must be used within a AuthDispatchProvider"
    );
  }
  return context;
};

export { AuthStateProvider, useAuthDispatch, useAuthState };
