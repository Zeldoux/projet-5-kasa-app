import React from 'react';
// component 
import Header from '../Header/header.jsx';
import Footer from '../Footer/footer.jsx';
// style 
import '../../styles/layout.scss';

/**
 * Layout Component
 * 
 * @component
 * 
 * @description
 * The Layout component serves as a wrapper for all the pages in the application.
 * It includes common layout elements like the header, footer, and any other components
 * that should appear on every page.
 */


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