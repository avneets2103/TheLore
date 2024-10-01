import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/RTK/provider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "The LORE",
  description: "The Lore of the greatest developer ever born, with TARS from interstellar as the narrator!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Icons/favicon.ico" sizes="any" />
      </head>
      <body>
        <NextUIProvider>
          <ThemeProvider
            defaultTheme="dark"
            enableSystem={false}
            attribute="class"
          >
            <ReduxProvider>
              {children}
              <Analytics />
            </ReduxProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
