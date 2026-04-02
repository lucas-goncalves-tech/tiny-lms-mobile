import { Button } from "@/components/ui/button";
import ButtonRoot from "@/components/ui/button/root";
import { useAuthStore } from "@/store/auth-store";
import { Text, View } from "react-native";

export default function Home() {
  const { signout } = useAuthStore();
  return (
    <View>
      <Button.Root onPress={signout}>
        <Button.Text>Logout</Button.Text>
      </Button.Root>
    </View>
  );
}
