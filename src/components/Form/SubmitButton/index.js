import { Button } from "@mui/material";

const SubmitButton = ({ label }) => {
  return (
    <Button type="submit" className="submit-btn" fullWidth>
      {label}
    </Button>
  );
};

export default SubmitButton;
