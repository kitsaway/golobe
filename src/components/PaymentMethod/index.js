import SignupFlow from "../Flow/SignupFlow";
import PaymentMethodForm from "./../Forms/PaymentMethod";

const PaymentMethod = () => {
  return <SignupFlow form={<PaymentMethodForm />} />;
};

export default PaymentMethod;
