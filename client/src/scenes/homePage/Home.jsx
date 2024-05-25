import React from 'react';
import Navbar from '../navbar/Navbar';
import {useTheme} from "@mui/material"
const HomePage = () => {
    const theme = useTheme();
    return (
        <div className={theme.palette.mode === "dark"? "bg-homepage-dark":"bg-homepage-light"} >
           <Navbar />
        </div>
    );
}

export default HomePage;