import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export const metadata: Metadata = {
  title: "L'art des rêves lucides",
  description: "Apprenez à faire des rêves lucides.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProviderWrapper>{children}</ChakraProviderWrapper>
      </body>
    </html>
  );
}
