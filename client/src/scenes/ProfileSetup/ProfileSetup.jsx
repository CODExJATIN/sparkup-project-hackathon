import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, } from "@mui/material";

import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import StartupForm from './startupForm';
import InvestorForm from './investorForm';


const ProfileSetup = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box backgroundColor={theme.palette.mode==="dark"? "gray":"aliceblue"} minHeight="100vh" width="100vw">
      <div className="form-header">
      <Typography fontWeight="bold" fontSize="32px" color="primary"
      backgroundColor={theme.palette.background.alt}
      paddingBottom="10px"
      paddingTop="10px"
      >
         SparkUp <EmojiObjectsTwoToneIcon sx={{ fontSize: "clamp(1rem,2rem,2.25rem)" }} />
        </Typography>
      </div>

      <Box
        width={isNonMobileScreens ? "50%" : "50%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        alignItems="center"
        display = "flex"
        justifyContent="center"
        flexDirection="column"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography className={theme.palette.mode==='dark'? 'dark-mode':'light-mode'} fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}
        >
          Let's Setup Your Profile before you start your journey!
        </Typography>
        {/*<StartupForm/>*/}
        //HAVE TO HANDLE THIS ISSUE 
        //WILL WORK ON IT LATER
        
      </Box>
    </Box>
  );
}

export default ProfileSetup

