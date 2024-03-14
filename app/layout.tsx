import type { Metadata } from "next";
import { createTheme, MantineProvider } from "@mantine/core";
import { ColorSchemeScript } from "@mantine/core";
// core styles are required for all packages
import "@mantine/core/styles.css";
import "./globals.css";

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  primaryColor: "pale-indigo",
  colors: {
    "pale-indigo": [
      "#eef3ff",
      "#dee2f2",
      "#bdc2de",
      "#98a0ca",
      "#7a84ba",
      "#6672b0",
      "#5c68ac",
      "#4c5897",
      "#424e88",
      "#364379",
    ],
  },
});

export const metadata: Metadata = {
  title: "PropertyPulse | Find the perfect Rental",
  description:
    "Property Pulse is a real estate platform that helps you find the perfect rental.",
    keywords: "rental, real estate, property, apartment, house, home, rent, lease, tenant, landlord",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
