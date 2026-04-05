import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ComponentProps, memo } from "react";
import InputIcon from "./icon";

type Props = TouchableOpacityProps & {
  icon: ComponentProps<typeof Ionicons>["name"];
};

const InputActions = memo(({ icon, ...props }: Props) => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.7}>
      <InputIcon name={icon} className="text-muted-foreground" />
    </TouchableOpacity>
  );
});

InputActions.displayName = "InputActions";

export default InputActions;
