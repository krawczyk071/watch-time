import Footer from "@/components/Footer";
import "../styles/style.scss";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/cartContext";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: "WatchTime shop",
  description: "my NextJS 13 project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#6d5a88" showSpinner={false} />
        <CartProvider>
          <Toaster position="bottom-center" />
          <Navbar />
          <div className="container">{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
