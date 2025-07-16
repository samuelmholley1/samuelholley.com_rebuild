import type { Metadata } from "next";
import "./globals.css"; // Your globals.css handles fonts
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Samuel Holley AI | Reclaim by Design",
  description: "Turn AI complexity into a strategic advantage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        {/* The Footer component can be added here later if needed */}
      </body>
    </html>
  );
}
