import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import MainApp from './MainApp';
import Footer from './Footer';

function App() {
    return (
        // Styling footer to the bottom
        <div className='flex flex-col min-h-screen justify-between'>
            {/* BrowserRouter is a React component that provides routing capabilities to enable navigation and rendering of different 
            components based on the current URL in a React application. */}
            <BrowserRouter>
                <Header />
                <MainApp />
                <Footer />
            </BrowserRouter>
        </div>
    );
}
export default App;