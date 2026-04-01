import { Image } from "expo-image";

export default function Logo({ size = 100 }: { size?: number }) {
  return (
    <Image
      source={require("../../assets/images/logo.svg")}
      style={{ width: size, height: size }}
      contentFit="contain"
    />
  );
}
