import { forwardRef, memo } from "react";
import { Input } from ".";
import { TextInput, TextInputProps } from "react-native";

const EmailField = memo(
  forwardRef<TextInput, TextInputProps>((props, ref) => {
    return (
      <Input.Root>
        <Input.Icon name="mail-outline" />
        <Input.Field
          placeholder="Seu@Email.com"
          keyboardType="email-address"
          {...props}
          ref={ref}
        />
      </Input.Root>
    );
  }),
);

EmailField.displayName = "EmailField";

export default EmailField;
