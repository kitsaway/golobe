import { useNavigate } from "react-router-dom";

const FormLogo = () => {
  const navigate = useNavigate();
  return (
    <img
      src="https://ik.imagekit.io/xe8oxb5c5l/Golobe/Logo.png"
      alt="Golobe logo"
      width={110}
      height={36}
      className="form-logo"
      onClick={() => navigate("/")}
    />
  );
};

export default FormLogo;
