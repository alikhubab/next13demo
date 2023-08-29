import "@/styles/globals.css";
import Header from "./Header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* <title>Ali's Website</title> */}</head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
