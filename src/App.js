import React from "react";
import ReactDOM from "react-dom";
import {Router} from 'react-router-dom'
import {BrowserRouter,Switch, Route, Redirect,HashRouter} from 'react-router-dom';
import ProductsList from './ProductList'
import IndexPage from './Layout'


const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/productsList" exact component={ProductsList}/>
            </Switch>
        </HashRouter>

    );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));







