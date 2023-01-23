import { Grid } from "@mui/material";
import ImageSwiper from "../ImageSwiper";

const AuthFlow = ({ form }) => {
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
        m: "26px auto",
        overflow: "hidden",
      }}
    >
      <Grid item xs={11} md={4}>
        {form}
      </Grid>
      <Grid item md={6} bg={5} sx={{ display: { xs: "none", md: "flex" } }}>
        <ImageSwiper />
      </Grid>
    </Grid>
  );
};

export default AuthFlow;