import LoginFlow from "../Flow/LoginFlow";
import ResetPasswordForm from "../Forms/ResetPasswordForm";

const ResetPassword = () => {
  return <LoginFlow form={<ResetPasswordForm />} />;
};

export default ResetPassword;
