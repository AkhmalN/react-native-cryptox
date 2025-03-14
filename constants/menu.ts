import { IMenu } from "@/schema/global";

export const menu: IMenu[] = [
  {
    text: "Home",
    icon: "Send",
    redirectTo: "/home",
  },
  {
    text: "Receive",
    icon: "Handshake",
    redirectTo: "/Receive",
  },
  {
    text: "Exchange",
    icon: "ArrowRightLeft",
    redirectTo: "/Exchange",
  },
  {
    text: "More",
    icon: "Blocks",
    redirectTo: "/More",
  },
];
