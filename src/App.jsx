import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import MainApp from './MainApp';
import Footer from './Footer';
import UserContext from './context/UserContext';

function App() {

    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        // Styling footer to the bottom
        <div className='flex flex-col min-h-screen justify-between'>
            {/* BrowserRouter is a React component that provides routing capabilities to enable navigation and rendering of different 
            components based on the current URL in a React application. */}
            <BrowserRouter>
                <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>  
                    <Header />
                    <MainApp />
                    <Footer />
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}
export default App;