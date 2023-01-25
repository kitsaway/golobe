import LoginFlow from "../Flow/LoginFlow";
import RecoverPasswordForm from "../Forms/RecoverPasswordForm";
const RecoverPassword = () => {
  return <LoginFlow form={<RecoverPasswordForm />} />;
};

export default RecoverPassword;
