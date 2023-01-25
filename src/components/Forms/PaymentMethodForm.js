import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import FormHeader from "../Form/FormHeader";
import FormInput from "../Form/FormInput";
import FormCheckbox from "../Form/FormCheckbox";
import SubmitButton from "../Form/SubmitButton";

const paymentForm = {
  header: "Add a payment method",
  subheader:
    "Let’s get you all set up so you can access your personal account.",
  inputs: [
    {
      id: "cardN",
      type: "text",
      label: "Card Number",
      name: "cardN",
    },
    {
      id: "expDate",
      type: "text",
      label: "Exp. Date",
      name: "expDate",
    },
    {
      id: "cvc",
      type: "text",
      label: "CVC",
      name: "cvc",
    },
    {
      id: "nameOnCard",
      type: "text",
      label: "Name on Card",
      name: "nameOnCard",
    },
    {
      id: "country",
      type: "text",
      label: "Country or Region",
      name: "country",
    },
  ],
  checkboxLabel: "Securely save my information for 1-click checkout",
  submitLabel: "Add payment method",
  helperText:
    "By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.",
};

const PaymentMethodForm = () => {
  const navigate = useNavigate();
  return (
    <Box className="form-box">
      <FormHeader
        header={paymentForm.header}
        subheader={paymentForm.subheader}
      />
      <Box
        component="form"
        className="form"
        autoComplete="off"
        onSubmit={() => navigate("/login")}
      >
        <Grid container columns={8} columnSpacing={{ md: 2, bg: 3 }}>
          {paymentForm.inputs.map((input) => (
            <Grid
              item
              xs={8}
              md={(input.id === "expDate") | (input.id === "cvc") ? 4 : 8}
              key={input.id}
            >
              <FormInput
                type={input.type}
                name={input.name}
                label={input.label}
              />
            </Grid>
          ))}
        </Grid>
        <FormCheckbox label={paymentForm.checkboxLabel} />
        <SubmitButton label={paymentForm.submitLabel} />
        <Typography variant="body1" textAlign="center">
          {paymentForm.helperText}
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentMethodForm;
