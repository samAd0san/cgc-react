import React from 'react';

import Header from './Header';
import MainApp from './MainApp';
import Footer from './Footer';

function App() {
    return (
        // Styling footer to the bottom
        <div className='flex flex-col h-screen justify-between'>
            <Header />
            <MainApp />
            <Footer />
        </div>
    );
}
export default App;