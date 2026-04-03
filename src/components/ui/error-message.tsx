import { TextProps } from "react-native";
import Typography from "./typography";

type Props = TextProps & {
  message?: string;
};

export default function ErrorMessage({ message, ...props }: Props) {
  if (!message) return null;
  return (
    <Typography variant={"destructive"} size={"xs"} {...props}>
      {message}
    </Typography>
  );
}
