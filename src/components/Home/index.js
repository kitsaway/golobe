import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box className="banner">
      <Box className="content-container">
        <Typography variant="h2">Helping Others</Typography>
        <Typography variant="h1">LIVE & TRAVEL</Typography>
        <Typography variant="subtitle1">
          Special offers to suit your plan
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
