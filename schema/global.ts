import { icons } from "lucide-react-native";

type iconName = keyof typeof icons;

export interface IMenu {
  text: string;
  icon: iconName;
  redirectTo: string;
}
