import AuthFlow from "../AuthFlow";
import VerifyCodeForm from "../Forms/VerifyCodeForm";

const VerifyCode = () => {
  return <AuthFlow form={<VerifyCodeForm />} />;
};

export default VerifyCode;
