import KeyboardView from "@/components/keyboard-avoiding-view";
import Heading from "@/components/ui/heading";
import { ScreenScroll } from "@/components/ui/screen-scroll";
import { StyledSafeAreaView } from "@/components/ui/styled-safe-area-view";
import Typography from "@/components/ui/typography";
import SignupForm from "@/features/signup/components/signup-form";
import useSignupController from "@/features/signup/hooks/use-signup.controller";
import { router } from "expo-router";
import { View } from "react-native";

export default function Signup() {
  const controllerProps = useSignupController();
  return (
    <StyledSafeAreaView
      edges={["bottom", "left", "right"]}
      className="flex-1 items-center justify-center"
    >
      <KeyboardView>
        <ScreenScroll contentContainerClassName="gap-8 justify-center items-center">
          <View className="gap-6 w-full">
            <View className="items-center">
              <Heading size={"3xl"}>Crie sua conta</Heading>
              <Typography variant="lead">
                Preencha os dados abaixo para criar sua conta
              </Typography>
            </View>

            <SignupForm {...controllerProps} />
          </View>

          <View>
            <Typography>
              Já tem uma conta?{" "}
              <Typography variant={"link"} onPress={() => router.back()}>
                Entre aqui
              </Typography>
            </Typography>
          </View>
        </ScreenScroll>
      </KeyboardView>
    </StyledSafeAreaView>
  );
}
