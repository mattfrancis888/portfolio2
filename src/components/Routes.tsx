import React from "react";
import { Route, Switch } from "react-router-dom";
import ArtistInfo from "./ArtistInfo";

const Routes: React.FC<{}> = () => {
    return (
        <Switch>
            <Route path="/" exact component={ArtistInfo} />
        </Switch>
    );
};

export default Routes;
