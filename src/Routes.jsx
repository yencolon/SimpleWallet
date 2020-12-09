import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { useAuthState } from "./context/AuthState";
import Auth from "./views/Auth";
import Purchase from "./views/Purchase";
import Wallet from "./views/Wallet";

const Routes = () => {
  const auth = useAuthState();
  console.log(auth)
  console.log(auth.isLogged ? '/wallet' : '/auth')
  return (
    <div>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/purchase">
          <Purchase />
        </PrivateRoute>
        <PrivateRoute exact path="/wallet">
          <Wallet />
        </PrivateRoute>
        <Route path="/">
          <Redirect to={`${auth.isLogged ? '/wallet' : '/auth'}`} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(Routes);

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuthState();
  console.log('alo')
  console.log(rest.path)
  console.log(auth)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
