import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";

export default function ScreenTemplate({ children, headerPadding }) {
  //useHeaderHeight is a hook that gives you the height of the header
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      colors={["#101010", "#2B2B2B"]}
      style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
    >
      {children}
    </LinearGradient>
  );
}
