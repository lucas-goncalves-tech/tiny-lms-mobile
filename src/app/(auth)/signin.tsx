import Logo from "@/components/logo";
import Heading from "@/components/ui/heading";
import Typography from "@/components/ui/typography";
import { StyledSafeAreaView } from "@/components/ui/styled-safe-area-view";
import SigninForm from "@/features/signin/components/signin-form";
import { useSigninController } from "@/features/signin/hooks/use-signin.controller";
import { View } from "react-native";
import { Link } from "expo-router";
import KeyboardView from "@/components/keyboard-avoiding-view";
import { ScreenScroll } from "@/components/ui/screen-scroll";

export default function Signin() {
  const controllerProps = useSigninController();

  return (
    <StyledSafeAreaView className="flex-1">
      <KeyboardView>
        <ScreenScroll contentContainerClassName="gap-8 justify-center items-center">
          <View className="items-center gap-4">
            <Logo size={50} />
            <View className="items-center gap-2">
              <Heading size="xl">Tiny LMS</Heading>
              <View className="w-6 h-1 bg-linear-to-r from-primary to-secondary rounded-4" />
            </View>
          </View>

          <View className="gap-6 w-full">
            <View className="items-center">
              <Heading size="3xl" weight="extrabold">
                Bem-vindo de volta!
              </Heading>
              <Typography size={"base"} variant={"lead"}>
                Continue sua jornada de aprendizado.
              </Typography>
            </View>

            <SigninForm {...controllerProps} />
          </View>

          <View>
            <Typography>
              Não tem uma conta?{" "}
              <Link href={"/signup"}>
                <Typography variant={"link"}>Cadastre-se</Typography>
              </Link>
            </Typography>
          </View>
        </ScreenScroll>
      </KeyboardView>
    </StyledSafeAreaView>
  );
}
