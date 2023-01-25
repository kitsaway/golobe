import LoginFlow from "../Flow/LoginFlow";
import VerifyCodeForm from "../Forms/VerifyCodeForm";

const VerifyCode = () => {
  return <LoginFlow form={<VerifyCodeForm />} />;
};

export default VerifyCode;
