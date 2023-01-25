import { Grid } from "@mui/material";
import ImageSwiper from "../ImageSwiper";
import FormLogo from "../Form/FormLogo";

const SignupFlow = ({ form }) => {
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
      <Grid
        item
        bg={5}
        sx={{ display: { xs: "none", md: "none", bg: "flex" } }}
      >
        <ImageSwiper />
      </Grid>
      <Grid item md={8} bg={6} className="form-container">
        <FormLogo />
        {form}
      </Grid>
    </Grid>
  );
};

export default SignupFlow;
