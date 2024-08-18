import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // browserRouter = Router , component : Routes , component : Route (path,element)

// import of Page
import Home from '../../pages/Home'; // old app.js
import About from '../../pages/About/about.jsx';
import Accommodation from '../../pages/Accommodation/accommodation.jsx';

// import of component
import Error from "../Error/index.jsx";
import Layout from "../Layout/index.jsx";

// Route to differents pages
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/accommodation" element={<Layout><Accommodation/></Layout>} />
                <Route path="/*" element={<Layout><Error/></Layout>} />
            </Routes>
        </Router>

    )

}
export default AppRouter;
