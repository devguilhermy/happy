import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import PlacesMap from "./pages/PlacesMap";
import CreatePlace from "./pages/CreatePlace";
import Place from "./pages/Place";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact></Route>
                <Route path="/places" component={PlacesMap} exact></Route>
                <Route path="/places/new" component={CreatePlace}></Route>
                <Route path="/places/:id" component={Place}></Route>
            </Switch>
        </BrowserRouter>
    );
}
