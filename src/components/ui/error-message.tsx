import { Text, TextProps } from "react-native";

type Props = TextProps & {
  message?: string;
};

export default function ErrorMessage({ message, ...props }: Props) {
  if (!message) return null;
  return (
    <Text className="text-xs text-destructive" {...props}>
      {message}
    </Text>
  );
}
