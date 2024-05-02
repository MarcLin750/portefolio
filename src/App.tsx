import React, { FunctionComponent, useState } from "react";
import Home from './pages/home';
import NavBar from "./component/navbar";
import Profile from "./pages/profil";
import CV from "./pages/cv";
import Veilles from "./pages/veilles";
import Projets from "./pages/projets";
import Experiences from "./pages/experiences";
import Contact from "./pages/contact";
import Footer from './component/footer'

import './styles/nav-bar.css';

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
                <Projets />
            )}
            {activePage === 'Experiences' && (
                <Experiences />
            )}
            {activePage === 'Veilles' && (
                <Veilles />
            )}
            {/* {activePage === 'Contact' && (
                <Contact />
            )} */}
            <Footer />
        </div>
    )
}

export default App;
