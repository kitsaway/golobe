import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";

const FormCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={handleChange} color="dark" />
      }
      label={label}
      className="checkbox-label"
      color="dark"
    />
  );
};

export default FormCheckbox;
