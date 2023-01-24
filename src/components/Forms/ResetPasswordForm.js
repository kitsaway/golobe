import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import FormInput from "./../Form/FormInput/index";
import SubmitButton from "./../Form/SubmitButton/index";
import FormHeader from "../Form/FormHeader";

const resetPwdForm = {
  header: "Set a password",
  subheader:
    "Your previous password has been reseted. Please set a new password for your account.",
  inputs: [
    {
      id: "create-pwd",
      type: "password",
      label: "Create Password",
      name: "createPwd",
    },
    {
      id: "repeat-pwd",
      type: "password",
      label: "Re-enter Password",
      name: "repeatPwd",
    },
  ],
  submitLabel: "Set password",
};

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  return (
    <Box className="form-box">
      <FormHeader
        header={resetPwdForm.header}
        subheader={resetPwdForm.subheader}
      />
      <Box
        component="form"
        className="form"
        autoComplete="off"
        onSubmit={() => navigate("/login")}
      >
        {resetPwdForm.inputs.map((input) => (
          <FormInput
            key={input.id}
            type={input.type}
            name={input.name}
            label={input.label}
          />
        ))}
        <SubmitButton label={resetPwdForm.submitLabel} />
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
