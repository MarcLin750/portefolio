import React, { FunctionComponent, useState } from "react";
import Home from './pages/home';
import CV from "./pages/cv";
import Profile from "./pages/profile";
import Footer from './component/footer'

import './styles/nav-bar.css';
import Veilles from "./pages/veilles";
import NavBar from "./component/navbar";

const App: FunctionComponent = () => {
    
    const [activePage, setActivePage] = useState<string>('Home');

    const handleSetActivePage = (page: string) => {
      setActivePage(page);
    };
  
    return(
        <div>
            <NavBar  setActivePage={handleSetActivePage} />
            {activePage === 'Home' && (
                <Home setActivePage={handleSetActivePage} />
            )}
            {activePage === 'Profile' && (
                <Profile />
            )}
            {activePage === 'CV' && (
                <CV />
            )}
            {activePage === 'Projets' && (
                <CV />
            )}
            {activePage === 'Experiences' && (
                <CV />
            )}
            {activePage === 'Veilles' && (
                <Veilles />
            )}
            {activePage === 'Contact' && (
                <CV />
            )}
            <Footer />
        </div>
    )
}

export default App;
