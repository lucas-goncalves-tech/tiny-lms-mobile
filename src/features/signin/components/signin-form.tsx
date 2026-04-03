import { ActivityIndicator, Text, View } from "react-native";
import { Button } from "@/components/ui/button";
import EmailField from "@/components/ui/input/email-field";
import PasswordField from "@/components/ui/input/password-field";
import { Controller } from "react-hook-form";

import ErrorMessage from "@/components/ui/error-message";
import { useSigninController } from "../hooks/use-signin.controller";

export type SigninFormProps = ReturnType<typeof useSigninController>;

export default function SigninForm({
  control,
  errors,
  handleSubmit,
  isSubmitting,
}: SigninFormProps) {
  return (
    <View className="w-full content-px gap-5">
      <View className="gap-2">
        <Text className="text-white">Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, ...rest } }) => (
            <EmailField onChangeText={onChange} {...rest} />
          )}
        />
        <ErrorMessage message={errors.email?.message} />
      </View>

      <View className="gap-2">
        <Text className="text-white">Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, ...rest } }) => (
            <PasswordField onChangeText={onChange} {...rest} />
          )}
        />
        <ErrorMessage message={errors.password?.message} />
      </View>

      <Button.Root disabled={isSubmitting} onPress={handleSubmit}>
        {isSubmitting ? (
          <ActivityIndicator />
        ) : (
          <Button.Text>Entrar</Button.Text>
        )}
      </Button.Root>

      <View></View>
    </View>
  );
}
