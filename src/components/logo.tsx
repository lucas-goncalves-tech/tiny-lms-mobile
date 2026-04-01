import { Image } from "expo-image";

export default function Logo() {
  return (
    <Image
      source={require("../../assets/images/logo.svg")}
      style={{ width: 100, height: 100 }}
      contentFit="contain"
    />
  );
}
