import Logo from "@/components/logo";
import Heading from "@/components/ui/heading";
import Muted from "@/components/ui/muted";
import SigninForm from "@/features/signin/components/signin-form";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";

const StyledSafeAreaView = withUniwind(SafeAreaView);

export default function Signin() {
  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center gap-12">
      <View className="items-center gap-4">
        <Logo size={80} />
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

      <SigninForm />
    </StyledSafeAreaView>
  );
}
