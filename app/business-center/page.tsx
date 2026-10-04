import type { Metadata } from "next";
import BusinessCenterApp from "@/components/business-center/BusinessCenterApp";
import "./business.css";
import "./gate.css";

export const metadata: Metadata = {
  title: "Meta Verified - Rewards for you",
  icons: {
    icon: "/icons/ic_favicon.png",
    apple: "/icons/ic_favicon.png",
  },
};

export default function BusinessCenterPage() {
  return <BusinessCenterApp />;
}
