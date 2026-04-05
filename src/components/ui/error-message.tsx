import { TextProps } from "react-native";
import Typography from "./typography";
import { memo } from "react";

type Props = TextProps & {
  message?: string;
};

const ErrorMessage = memo(({ message, ...props }: Props) => {
  if (!message) return null;
  return (
    <Typography variant={"destructive"} size={"xs"} {...props}>
      {message}
    </Typography>
  );
});

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
