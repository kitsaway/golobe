import { Grid } from "@mui/material";
import ImageSwiper from "../ImageSwiper";
import FormLogo from "../Form/FormLogo";

const LoginFlow = ({ form }) => {
  return (
    <Grid
      container
      columns={12}
      display="flex"
      sx={{
        width: "100%",
        justifyContent: { xs: "center", md: "space-evenly" },
        alignItems: "flex-start",
        flexDirection: { xs: "column", md: "row" },
        m: "26px auto",
        padding: { xs: "0 15px", md: "0" },
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} md={4.5} className="form-container">
        <FormLogo />
        {form}
      </Grid>
      <Grid item md={6} bg={5} sx={{ display: { xs: "none", md: "flex" } }}>
        <ImageSwiper />
      </Grid>
    </Grid>
  );
};

export default LoginFlow;
