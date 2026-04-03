import Logo from "@/components/logo";
import Heading from "@/components/ui/heading";
import Typography from "@/components/ui/typography";
import { StyledSafeAreaView } from "@/components/ui/styled-safe-area-view";
import SigninForm from "@/features/signin/components/signin-form";
import { useSigninController } from "@/features/signin/hooks/use-signin.controller";
import { ScrollView, View } from "react-native";
import { Link } from "expo-router";
import KeyboardView from "@/components/keyboard-avoiding-view";

export default function Signin() {
  const controllerProps = useSigninController();

  return (
    <StyledSafeAreaView className="flex-1">
      <KeyboardView>
        <ScrollView
          className="content-px flex-1"
          contentContainerClassName="gap-12 justify-center items-center grow"
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center gap-4">
            <Logo size={50} />
            <View className="items-center gap-2">
              <Heading size="xl">Tiny LMS</Heading>
              <View className="w-6 h-1 bg-linear-to-r from-primary to-secondary rounded-4" />
            </View>
          </View>

          <View className="items-center">
            <Heading size="3xl" weight="extrabold">
              Bem-vindo de volta!
            </Heading>
            <Typography size={"base"} variant={"lead"}>
              Continue sua jornada de aprendizado.
            </Typography>
          </View>

          <SigninForm {...controllerProps} />

          <View>
            <Typography>
              Não tem uma conta?{" "}
              <Link href={"/signup"}>
                <Typography variant={"link"}>Cadastre-se</Typography>
              </Link>
            </Typography>
          </View>
        </ScrollView>
      </KeyboardView>
    </StyledSafeAreaView>
  );
}
