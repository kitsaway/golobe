import { Typography } from "@mui/material";

const FormHeader = ({ header, subheader }) => {
  return (
    <>
      <Typography variant="h2" className="h2">
        {header}
      </Typography>
      <Typography variant="subtitle1" className="subtitle1">
        {subheader}
      </Typography>
    </>
  );
};

export default FormHeader;
