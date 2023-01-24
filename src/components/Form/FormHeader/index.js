import { Typography } from "@mui/material";

const FormHeader = ({ header, subheader }) => {
  return (
    <>
      <Typography variant="h2" className="h2">
        {header}
      </Typography>
      <Typography variant="body1" className="body1">
        {subheader}
      </Typography>
    </>
  );
};

export default FormHeader;
