import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ImageSwiper from "../ImageSwiper";

const AuthFlow = ({ form }) => {
  const navigate = useNavigate();
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
        overflow: "hidden",
      }}
    >
      <Grid item xs={11} md={4.5}>
        <img
          src="https://ik.imagekit.io/xe8oxb5c5l/Golobe/Logo.png"
          alt="Golobe logo"
          width={110}
          height={36}
          className="form-logo"
          onClick={() => navigate("/")}
        />
        {form}
      </Grid>
      <Grid item md={6} bg={5} sx={{ display: { xs: "none", md: "flex" } }}>
        <ImageSwiper />
      </Grid>
    </Grid>
  );
};

export default AuthFlow;