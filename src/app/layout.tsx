import "@/styles/globals.scss";
import "@/styles/layout.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Dust Rabbit",
  description: "Dust Rabbit",
  icons: "munto.png",
};

const ownglyph = localFont({
  src: "../styles/fonts/Ownglyph.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={ownglyph.className}>
        <div className="layout">{children}</div>
      </body>
    </html>
  );
}
