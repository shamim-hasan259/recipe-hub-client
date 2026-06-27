const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Merienda } from "next/font/google";
import "./globals.css";
const merianda = Merienda({
  subsets: ["latin"],
});

export const metadata = {
  title: "Recipiehub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`} suppressHydrationWarning>
      <body className={`min-h-full flex flex-col ${merianda.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
