import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import ImageSwiper from "./ImageSwiper";
const Login = () => {
  return (
    <Grid
      container
      columns={12}
      display="flex"
      sx={{
        width: "100%",
        justifyContent: { xs: "center", md: "space-evenly" },
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        m: "24px auto",
        overflow: "hidden",
      }}
    >
      <Grid item xs={11} md={4}>
        <LoginForm />
      </Grid>
      <Grid item md={6} bg={5} sx={{ display: { xs: "none", md: "flex" } }}>
        <ImageSwiper />
      </Grid>
    </Grid>
  );
};

export default Login;
