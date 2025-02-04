import { DM_Serif_Display, Inter } from "next/font/google";

const DM = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export default { DM, inter };
