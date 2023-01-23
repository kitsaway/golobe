import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);
  const handleShowRepeatedPassword = () =>
    setShowRepeatedPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        <Typography variant="h2" className="h2">
          Set a password
        </Typography>
        <Typography variant="body1" className="body1">
          Your previous password has been reseted. Please set a new password for
          your account.
        </Typography>
        <Box
          component="form"
          className="form"
          autoComplete="off"
          onSubmit={() => navigate("/login")}
        >
          <TextField
            className="input"
            label="Create Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            color="neutral"
          />
          <TextField
            className="input"
            label="Re-enter Password"
            type={showRepeatedPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowRepeatedPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showRepeatedPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            color="neutral"
          />
          <Button type="submit" className="submit-btn" fullWidth>
            Set password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPasswordForm;
