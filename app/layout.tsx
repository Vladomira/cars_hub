import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
   title: "Car Hub",
   description: "Discover the best cars in the world.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className="relative">
            <AuthProvider>
               <main className="overflow-hidden">
                  <Navbar />
                  {children}
                  <Footer />
               </main>
            </AuthProvider>
         </body>
      </html>
   );
}
