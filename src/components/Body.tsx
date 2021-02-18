import React from "react";
import { Router } from "react-router-dom";
import history from "../browserHistory";
import ArtistInfo from "./ArtistInfo";
const App: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <ArtistInfo />
        </React.Fragment>
    );
};

export default App;
