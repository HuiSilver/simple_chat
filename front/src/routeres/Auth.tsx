import AuthMain from "@pages/Auth/Main";
import React from "react"
import { Route } from "react-router-dom";

const AuthRoutes:React.ReactElement = (
     <React.Fragment>
            <Route path={"/auth"} element={<AuthMain/>}/>
      </React.Fragment>
);


export default AuthRoutes;