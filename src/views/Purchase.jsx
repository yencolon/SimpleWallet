import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CreatePurchase from "../components/CreatePurchase";
import VerifyPurchase from "../components/VerifyPurchase";

const Purchase = () => {
  const { path } = useRouteMatch();
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <Switch>
        <Route exact path={`${path}/verify`}>
          <VerifyPurchase />
        </Route>
        <Route exact path={`${path}/`}>
          <CreatePurchase />
        </Route>
      </Switch>
    </div>
  );
};

export default Purchase;
