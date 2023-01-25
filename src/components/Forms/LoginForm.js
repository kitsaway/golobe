import { Link } from "react-router-dom";
import { Box, FormGroup } from "@mui/material";
import FormHeader from "../Form/FormHeader";
import SubmitButton from "../Form/SubmitButton";
import FormRedirect from "../Form/FormRedirect";
import FormCheckbox from "../Form/FormCheckbox";
import FormInput from "../Form/FormInput";

const loginForm = {
  header: "Login",
  subheader: "Login to access your Golobe account",
  inputs: [
    {
      id: "email",
      type: "email",
      label: "Email",
      name: "email",
    },
    {
      id: "pwd",
      type: "password",
      label: "Password",
      name: "password",
    },
  ],
  checkboxLabel: "Remember me",
  submitLabel: "Login",
  redirect: {
    question: "Don’t have an account?",
    linkPath: "/signup",
    linkText: "Sign up",
  },
};

const LoginForm = () => {
  return (
    <Box className="form-box">
      <FormHeader header={loginForm.header} subheader={loginForm.subheader} />
      <Box component="form" className="form" autoComplete="off">
        {loginForm.inputs.map((input) => (
          <FormInput
            key={input.id}
            type={input.type}
            name={input.name}
            label={input.label}
          />
        ))}
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormCheckbox label={loginForm.checkboxLabel} />
          <Link to="/recover-password" className="orange">
            Forgot Password
          </Link>
        </FormGroup>
        <SubmitButton label={loginForm.submitLabel} />
        <FormRedirect
          question={loginForm.redirect.question}
          linkPath={loginForm.redirect.linkPath}
          linkText={loginForm.redirect.linkText}
        />
      </Box>
    </Box>
  );
};

export default LoginForm;
