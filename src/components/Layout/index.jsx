import React from 'react';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';

const Layout = ({ children }) => { /* (children) =  page content to render */
    return (
        <div>
            <Header/>
            <main>
                {children} 
            </main>
            <Footer/>
        </div>
    );
}

export default Layout