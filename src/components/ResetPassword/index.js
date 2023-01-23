import AuthFlow from "../AuthFlow";
import ResetPasswordForm from "../Forms/ResetPasswordForm";

const ResetPassword = () => {
  return <AuthFlow form={<ResetPasswordForm />} />;
};

export default ResetPassword;
