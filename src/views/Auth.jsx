import React from "react";
import {
  Switch,
  Route,
  withRouter,
  useRouteMatch,
  Redirect,
} from "react-router";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useAuthState } from "../context/AuthState";

const Auth = () => {
  const { path } = useRouteMatch();
  const auth = useAuthState();
  return (
    <div className="flex flex-row justify-center">
      <Switch>
        <Route exact path={`${path}/register`}>
          <RegisterForm />
        </Route>
        <Route exact path={`${path}/`}>
          <LoginForm />
        </Route>
        {auth.isLogged ? <Redirect from={`${path}/`} to="/" /> : null}
      </Switch>
    </div>
  );
};

export default withRouter(Auth);
