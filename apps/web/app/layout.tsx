import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "DEVINARCH Control Center",
  description: "Operational hub for the DEVINARCH platform."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="layout">
          <header className="layout__header">
            <p className="layout__tag">DEVINARCH</p>
            <h1 className="layout__title">Control Center</h1>
            <p className="layout__subtitle">
              This starter shell stitches together the monorepo packages and apps that will power DEVINE&apos;s church management experience.
            </p>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
