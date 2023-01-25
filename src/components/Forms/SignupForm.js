import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import FormHeader from "../Form/FormHeader";
import FormInput from "./../Form/FormInput";
import FormCheckbox from "../Form/FormCheckbox";
import SubmitButton from "./../Form/SubmitButton";
import FormRedirect from "../Form/FormRedirect";

const signupForm = {
  header: "Sign Up",
  subheader: "Let’s get you all set up so you can access your personal account.",
  inputs: [
    {
      id: "fname",
      type: "text",
      label: "First Name",
      name: "fName",
    },
    {
      id: "lname",
      type: "text",
      label: "Last Name",
      name: "lName",
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      name: "email",
    },
    {
      id: "phone",
      type: "text",
      label: "Phone Number",
      name: "phone",
    },
    {
      id: "pwd",
      type: "password",
      label: "Password",
      name: "password",
    },
    {
      id: "pwdConfirm",
      type: "password",
      label: "Confirm Password",
      name: "pwdConfirm",
    },
  ],
  checkboxLabel: "I agree to all the Terms and Privacy Policy",
  submitLabel: "Create account",
  redirect: {
    question: "Already have an account?",
    linkPath: "/login",
    linkText: "Login",
  },
};
const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <Box className="form-box">
      <FormHeader header={signupForm.header} subheader={signupForm.subheader} />
      <Box
        component="form"
        className="form"
        autoComplete="off"
        onSubmit={() => navigate("/payment-method")}
      >
        <Grid container columns={8} columnSpacing={{ md: 2, bg: 3 }}>
          {signupForm.inputs.map((input) => (
            <Grid
              item
              xs={8}
              md={input.type !== "password" ? 4 : 8}
              key={input.id}
            >
              <FormInput
                type={input.type}
                name={input.name}
                label={input.label}
              />
            </Grid>
          ))}
        </Grid>
        <FormCheckbox label={signupForm.checkboxLabel} />
        <SubmitButton label={signupForm.submitLabel} />
        <FormRedirect
          question={signupForm.redirect.question}
          linkPath={signupForm.redirect.linkPath}
          linkText={signupForm.redirect.linkText}
        />
      </Box>
    </Box>
  );
};

export default SignupForm;
