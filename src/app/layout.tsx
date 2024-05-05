import "./globals.css";
import PageAnimatePresence from "./components/HOC/PageAnimatePresence";
import Nav from "./components/Nav/Nav";
import { Gilroy, Mazius } from "./fonts/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Gilroy.variable} ${Mazius.variable}`}
        id="page-container"
      >
        <main>
          <div className="spacer"></div>
          <Nav />
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </main>
      </body>
    </html>
  );
}
