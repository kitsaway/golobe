import SignupFlow from "../Flow/SignupFlow";
import PaymentMethodForm from "./../Forms/PaymentMethodForm";

const PaymentMethod = () => {
  return <SignupFlow form={<PaymentMethodForm />} />;
};

export default PaymentMethod;
