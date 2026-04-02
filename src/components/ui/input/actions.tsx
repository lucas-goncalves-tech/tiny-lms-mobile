import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ComponentProps } from "react";
import InputIcon from "./icon";

type Props = TouchableOpacityProps & {
  icon: ComponentProps<typeof Ionicons>["name"];
};

export default function InputActions({ icon, ...props }: Props) {
  return (
    <TouchableOpacity {...props} activeOpacity={0.7}>
      <InputIcon name={icon} className="text-muted-foreground" />
    </TouchableOpacity>
  );
}
