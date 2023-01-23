import { Link, useNavigate } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const VerifyCodeForm = () => {
  const navigate = useNavigate();
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
          Verify Code
        </Typography>
        <Typography variant="body1" className="body1">
          An authentication code has been sent to your email.
        </Typography>
        <Box
          component="form"
          className="form"
          autoComplete="off"
          onSubmit={() => navigate("/reset-password")}
        >
          <TextField
            type="text"
            fullWidth
            color="neutral"
            className="input"
            label="Enter Code"
          />
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            Didn’t receive a code?{" "}
            <Link to="/signup" className="orange">
              Resend
            </Link>
          </Typography>
          <Button type="submit" className="submit-btn" fullWidth>
            Verify
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default VerifyCodeForm;
