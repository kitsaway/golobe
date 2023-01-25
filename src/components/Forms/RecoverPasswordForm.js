import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import BackButton from "../Form/BackButton";
import FormHeader from "../Form/FormHeader";
import FormInput from "../Form/FormInput";
import SubmitButton from "../Form/SubmitButton";

const recoverPwdForm = {
  backBtn: {
    label: "Back to login",
    linkPath: "/login",
  },
  header: "Forgot your password?",
  subheader:
    "Don’t worry, happens to all of us. Enter your email below to recover your password",
  inputs: [
    {
      id: "email",
      type: "email",
      label: "Email",
      name: "email",
    },
  ],
  submitLabel: "Submit",
};

const RecoverPasswordForm = () => {
  const navigate = useNavigate();
  return (
    <Box className="form-box">
      <BackButton
        label={recoverPwdForm.backBtn.label}
        linkPath={recoverPwdForm.backBtn.linkPath}
      />
      <FormHeader
        header={recoverPwdForm.header}
        subheader={recoverPwdForm.subheader}
      />
      <Box
        component="form"
        className="form"
        autoComplete="off"
        onSubmit={() => navigate("/verify-code")}
      >
        {recoverPwdForm.inputs.map((input) => (
          <FormInput
            key={input.id}
            type={input.type}
            name={input.name}
            label={input.label}
          />
        ))}
        <SubmitButton label={recoverPwdForm.submitLabel} />
      </Box>
    </Box>
  );
};

export default RecoverPasswordForm;
