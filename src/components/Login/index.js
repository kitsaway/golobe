import AuthFlow from "../AuthFlow";
import LoginForm from "../Forms/LoginForm";

const Login = () => {
  return <AuthFlow form={<LoginForm />} />;
};

export default Login;
