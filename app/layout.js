import Navbar from "./components/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
        <body className="fonters bg-[#0F0E0E] text-white">
          <Navbar />
          {children}
        </body>
    </html>
  );
}
