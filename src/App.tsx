import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './component/navbar';
import Home from './pages/home';
import CV from "./pages/cv";
import Footer from './component/footer'

const App: FunctionComponent = () => {
    return(
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/portfolio" component={Home} />
                    <Route exact path="/portfolio/cv" component={CV} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;