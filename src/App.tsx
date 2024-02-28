import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './component/navbar.tsx';
import Home from './component/home.tsx';
import Footer from './component/footer.tsx'

const App: FunctionComponent = () => {
    return(
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/portfolio" Component={Home} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;