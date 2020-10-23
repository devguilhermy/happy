import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import PlacesMap from "./pages/PlacesMap";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact></Route>
                <Route path="/places" component={PlacesMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}
