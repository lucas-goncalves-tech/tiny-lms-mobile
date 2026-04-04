import Typography from "@/components/ui/typography";
import { Controller } from "react-hook-form";
import { ActivityIndicator, View } from "react-native";
import useSignupController from "../hooks/use-signup.controller";
import { Input } from "@/components/ui/input";
import EmailField from "@/components/ui/input/email-field";
import PasswordField from "@/components/ui/input/password-field";
import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/error-message";

export default function SignupForm({
  handleSubmit,
  control,
  errors,
  setFocus,
  isSubmitting,
}: ReturnType<typeof useSignupController>) {
  return (
    <View className="w-full gap-form">
      <View className="gap-field">
        <Typography>Nome</Typography>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, ...rest } }) => (
            <Input.Root>
              <Input.Icon name="person" />
              <Input.Field
                placeholder="Digite seu nome"
                onChangeText={onChange}
                {...rest}
                returnKeyType="next"
                submitBehavior="submit"
                onSubmitEditing={() => setFocus("email")}
              />
            </Input.Root>
          )}
        />
        <ErrorMessage message={errors.name?.message} />
      </View>
      <View className="gap-field">
        <Typography>Email</Typography>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, ...rest } }) => (
            <EmailField
              placeholder="Digite seu email"
              onChangeText={onChange}
              {...rest}
              returnKeyType="next"
              submitBehavior="submit"
              onSubmitEditing={() => setFocus("password")}
            />
          )}
        />
        <ErrorMessage message={errors.email?.message} />
      </View>
      <View className="gap-field">
        <Typography>Senha</Typography>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, ...rest } }) => (
            <PasswordField
              onChangeText={onChange}
              {...rest}
              returnKeyType="next"
              submitBehavior="submit"
              onSubmitEditing={() => setFocus("confirmPassword")}
            />
          )}
        />
        <ErrorMessage message={errors.password?.message} />
      </View>
      <View className="gap-field">
        <Typography>Confirmar senha</Typography>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, ...rest } }) => (
            <PasswordField
              onChangeText={onChange}
              {...rest}
              returnKeyType="send"
              onSubmitEditing={() => {
                if (!isSubmitting) handleSubmit();
              }}
            />
          )}
        />
        <ErrorMessage message={errors.confirmPassword?.message} />
      </View>

      <Button.Root disabled={isSubmitting} onPress={handleSubmit}>
        {isSubmitting ? (
          <ActivityIndicator />
        ) : (
          <Button.Text>Cadastrar</Button.Text>
        )}
      </Button.Root>
    </View>
  );
}
