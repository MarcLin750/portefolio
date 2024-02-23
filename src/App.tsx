import React, { FunctionComponent } from "react";
import NavBar from './component/navbar.tsx';
import Home from './component/home.tsx';
import Footer from './component/footer.tsx'

const App: FunctionComponent = () => {
    return(
        <div>
            <NavBar />
            <Home />
            <Footer />
        </div>
    )
}

export default App;