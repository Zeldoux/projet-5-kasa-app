import React from 'react';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import '../../styles/layout.scss';



const Layout = ({ children }) => { /* (children) =  page content to render */
    return (
        <>
        <Header/>
        <main>
            {children} 
        </main>
        <Footer/>
        </>
    );
}

export default Layout