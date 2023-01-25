import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BackButton from "../Form/BackButton";
import FormInput from "../Form/FormInput";
import FormHeader from "../Form/FormHeader";
import SubmitButton from "../Form/SubmitButton";

const verifyForm = {
  backBtn: {
    label: "Back to login",
    linkPath: "/login",
  },
  header: "Verify Code",
  subheader: "An authentication code has been sent to your email.",
  inputs: [
    {
      id: "code",
      type: "text",
      label: "Enter Code",
      name: "code",
    },
  ],
  submitLabel: "Verify",
};

const VerifyCodeForm = () => {
  const navigate = useNavigate();
  return (
    <Box className="form-box">
      <BackButton
        label={verifyForm.backBtn.label}
        linkPath={verifyForm.backBtn.linkPath}
      />
      <FormHeader header={verifyForm.header} subheader={verifyForm.subheader} />
      <Box
        component="form"
        className="form"
        autoComplete="off"
        onSubmit={() => navigate("/reset-password")}
      >
        {verifyForm.inputs.map((input) => (
          <FormInput
            key={input.id}
            type={input.type}
            name={input.name}
            label={input.label}
          />
        ))}
        <Typography variant="subtitle2" sx={{ display: "flex", textAlign: "left" }}>
          Didn’t receive a code?
          <Typography
            variant="subtitle2"
            className="orange"
            sx={{ marginLeft: "5px" }}
          >
            Resend
          </Typography>
        </Typography>
        <SubmitButton label={verifyForm.submitLabel} />
      </Box>
    </Box>
  );
};

export default VerifyCodeForm;
