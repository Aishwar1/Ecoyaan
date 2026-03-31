import "../styles/globals.css";
import { AddressProvider } from "../context/AddressContext";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">

        <AddressProvider>

          <Header />

          <div className="min-h-screen flex flex-col">
            <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-8 pb-24">
              {children}
            </main>
          </div>

          <StickyFooter />

        </AddressProvider>

      </body>
    </html>
  );
}