import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackButton = ({ label, linkPath }) => {
  return (
    <Link to={linkPath} className="back-btn">
      <ArrowBackIosIcon color="dark" />
      <Typography variant="subtitle2">{label}</Typography>
    </Link>
  );
};

export default BackButton;
