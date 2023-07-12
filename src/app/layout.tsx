import "./global.css";

import { Navbar } from "@/template/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen  text-gray-900 font-mono font-roboto">
        <Navbar />
        <div className="mx-auto max-w-2xl mt-48">{children}</div>
      </body>
    </html>
  );
}
