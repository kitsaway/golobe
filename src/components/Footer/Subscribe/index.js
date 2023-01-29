import { Box, Typography } from "@mui/material";
import FormInput from "./../../Form/FormInput";
import SubmitButton from "./../../Form/SubmitButton";

const subscribe = [
  {
    id: "subsc-title",
    variant: "h2",
    text: "Subscribe Newsletter",
    className: "subscribe-h2",
  },
  {
    id: "subsc-subtitle",
    variant: "subtitle1",
    text: "The Travel",
    className: "subscribe-subtitle1",
  },
  {
    id: "subsc-description",
    variant: "body1",
    text: "Get inspired! Receive travel discounts, tips and behind the scenes stories.",
    className: "subscribe-body1",
  },
];

const inputs = [
  {
    id: "subscribe-email",
    type: "email",
    name: "email",
    placeholder: "Your email address",
  },
];

const Subscribe = () => {
  return (
    <Box className="subscribe-container">
      <Box>
        <Box className="subscribe-text">
          {subscribe.map((typography) => (
            <Typography
              key={typography.id}
              variant={typography.variant}
              className={typography.className}
            >
              {typography.text}
            </Typography>
          ))}
        </Box>
        <Box component="form" autoComplete="off" className="subscribe-form">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          ))}
          <SubmitButton label="Subscribe" />
        </Box>
      </Box>
      <Box className="mailbox">
        <img
          src="https://ik.imagekit.io/xe8oxb5c5l/Golobe/mailbox.png"
          alt="mailbox"
        />
      </Box>
    </Box>
  );
};

export default Subscribe;
