import AuthFlow from "../AuthFlow"
import RecoverPasswordForm from "../Forms/RecoverPasswordForm";
const RecoverPassword = () => {
  return (<AuthFlow form={<RecoverPasswordForm />} />)
}

export default RecoverPassword;