import { forwardRef, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Input } from ".";

const PasswordField = forwardRef<TextInput, TextInputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input.Root>
      <Input.Icon name="lock-closed" />
      <Input.Field
        placeholder="********"
        secureTextEntry={!showPassword}
        {...props}
        ref={ref}
      />
      <Input.Actions
        onPress={() => setShowPassword((prev) => !prev)}
        icon={showPassword ? "eye-off" : "eye"}
      />
    </Input.Root>
  );
});

PasswordField.displayName = "PasswordField";

export default PasswordField;
