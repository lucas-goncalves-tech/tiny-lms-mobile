import Logo from "@/components/logo";
import Heading from "@/components/ui/heading";
import Muted from "@/components/ui/muted";
import { StyledSafeAreaView } from "@/components/ui/styled-safe-area-view";
import SigninForm from "@/features/signin/components/signin-form";
import { useSigninController } from "@/features/signin/hooks/use-signin.controller";
import { View } from "react-native";

export default function Signin() {
  const controllerProps = useSigninController();

  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center gap-12">
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
        <Muted size="md">Continue sua jornada de aprendizado.</Muted>
      </View>

      <SigninForm {...controllerProps} />
    </StyledSafeAreaView>
  );
}
