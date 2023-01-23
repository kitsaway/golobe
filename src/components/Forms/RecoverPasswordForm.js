import { Link } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const RecoverPasswordForm = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      className="form-container"
    >
      <Box className="form-box">
        <Link to="/login" className="back-btn">
          <ArrowBackIosIcon color="dark" />
          <Typography variant="body2">Back to login</Typography>
        </Link>
        <Typography variant="h2" className="h2">
          Forgot your password?
        </Typography>
        <Typography variant="body1" className="body1">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </Typography>
        <Box component="form" className="form" autoComplete="off">
          <TextField
            type="email"
            fullWidth
            color="neutral"
            className="input"
            label="Email"
          />
          <Button type="submit" className="submit-btn" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RecoverPasswordForm;
