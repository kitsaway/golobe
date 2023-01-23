import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  FormGroup,
  Button,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      className="login-container"
    >
      <Link to="/">
        <img
          src="https://ik.imagekit.io/xe8oxb5c5l/Golobe/Logo.png"
          alt="Golobe logo"
          width={110}
          height={36}
          className="login-logo"
        />
      </Link>
      <Box className="form-container">
        <Typography variant="h2" className="h2">
          Login
        </Typography>
        <Typography variant="body1" className="body1">
          Login to access your Golobe account
        </Typography>
        <Box component="form" className="form" autoComplete="off">
          <TextField
            className="input"
            label="Email"
            fullWidth
            color="neutral"
          />
          <TextField
            className="input"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
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
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color="dark"
                />
              }
              label="Remember me"
              className="checkbox-label"
              color="dark"
            />
            <Link to="/" className="orange">
              Forgot Password
            </Link>
          </FormGroup>
          <Button type="submit" className="submit-btn" fullWidth>
            Login
          </Button>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link to="/signup" className="orange">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
