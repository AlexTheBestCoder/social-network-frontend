import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Navigate } from "react-router-dom";
import Form from "./Form"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          TheSocialNetwork
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem"}}>
          Bienvenue, dans l'univers passionnant de TheSocialNetwork!
        </Typography>
      </Box>
      <Form/>
    </Box>
  );
};

export default LoginPage;
