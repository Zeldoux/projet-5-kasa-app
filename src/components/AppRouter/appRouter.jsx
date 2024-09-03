import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
// Import components from react-router-dom for routing. 
// `BrowserRouter` is renamed as `Router` for simplicity. 
// `Routes` is the component that handles routing, and `Route` defines individual routes.

// import of Page
import Home from '../../pages/Home/HomePage.jsx'; // old app.js
import About from '../../pages/About/AboutPage.jsx';
import Accommodation from '../../pages/Accommodation/AccommodationPage.jsx';
import Error from "../../pages/Error/ErrorPage.jsx";

// Import the Layout component 
import Layout from "../Layout/layout.jsx"; // wraps around each page component

/**
 * AppRouter component sets up the routing for the application.
 * 
 * @function AppRouter
 * @returns {JSX.Element} The router setup with different routes and corresponding pages/components.
 */


// Route to differents pages
const AppRouter = () => { // Router component wraps around all routes to enable routing in the app
    return ( // Routes component holds all Route definitions
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/accommodation/id:" element= {<Layout><Accommodation/></Layout>} />
                <Route path="/*" element={<Layout><Error/></Layout>} />
            </Routes>
        </Router>

    )

}

export default AppRouter;