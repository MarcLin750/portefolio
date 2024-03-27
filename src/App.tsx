import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer'

const App: FunctionComponent = () => {
    return(
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/portfolio" component={Home} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;