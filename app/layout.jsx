import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "@/app/lib/auth/AuthContextProvider";
import { DatabaseContextProvider } from "./lib/database/DatabaseContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogPress",
  description: "Share your thoughts with the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <AuthContextProvider>
          <DatabaseContextProvider>
            <Navbar />
            {children}
          </DatabaseContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
