import "./globals.css";
import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { theme } from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gate of Babylon",
  description:
    "Gate of Babylon, the collection of developer tools and resources.",
};

export default function RootLayout({
  children,
  menu,
  showcase,
}: Readonly<{
  children: React.ReactNode;
  menu: React.ReactNode;
  showcase: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          {children}
          {menu}
          {showcase}
        </MantineProvider>
      </body>
    </html>
  );
}
