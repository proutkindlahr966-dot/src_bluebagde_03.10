import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import "./landing.css";

export const metadata: Metadata = {
  title: "Northline Media — Stories that move audiences",
  description:
    "Northline Media is an independent communications studio helping brands craft clear stories across film, digital, and press.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function HomePage() {
  return <LandingPage />;
}
