import { useEffect, useState } from "react";
import Header, { MobileMenu } from "./Header";

export default function Layout({ children }) {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="p-4 w-screen h-[64vh]">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>
      <MobileMenu />
      {/* <Footer /> */}
    </div>
  );
}
