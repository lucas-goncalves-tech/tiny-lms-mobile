import Logo from "@/components/logo";
import { Text, View } from "react-native";
import { withUniwind } from "uniwind";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const StyledMotiView = withUniwind(MotiView);

export default function Home() {
  return (
    <View className="bg-background items-center justify-center flex-1 gap-8">
      <View className="relative items-center justify-center ">
        <StyledMotiView
          key="spin-animation"
          from={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
            repeatReverse: false,
            easing: Easing.linear,
          }}
          className="absolute"
        >
          <View className="size-38 bg-linear-to-r from-primary to-secondary rounded-full" />
        </StyledMotiView>
        <View className="bg-background rounded-full size-34 items-center justify-center">
          <Logo />
        </View>
      </View>
      <View>
        <Text className="text-foreground text-2xl font-bold">Tiny LMS</Text>
      </View>
    </View>
  );
}
