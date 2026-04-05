import Skeleton from "@/components/ui/skeleton";
import { View } from "react-native";

export default function SkeletonSignupForm() {
  return (
    <View className="flex-1 items-center justify-center gap-form">
      <Skeleton className="w-full h-12" />
      <Skeleton className="w-full h-12" />
      <Skeleton className="w-full h-12" />
      <Skeleton className="w-full h-12" />
    </View>
  );
}
