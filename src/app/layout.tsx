import "./global.css";
import { GithubIcon } from "./GithubIcon";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GithubIcon />
        {children}
      </body>
    </html>
  );
}
