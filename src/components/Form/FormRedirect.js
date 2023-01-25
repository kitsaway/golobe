import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const FormRedirect = ({ question, linkPath, linkText }) => {
  return (
    <Typography variant="body2" sx={{ textAlign: "center" }}>
      {question}
      <Link to={linkPath} className="orange">
        {linkText}
      </Link>
    </Typography>
  );
};

export default FormRedirect;
