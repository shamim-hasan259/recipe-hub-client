import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/providers/NextThemeProvider";
import React from "react";
import { Toaster } from "react-hot-toast";

const layout = ({ children }) => {
  return (
    <div>
      <NextThemeProvider>
        <Navbar />
        <main>
          {children}
          <Toaster />
        </main>
        <Footer />
      </NextThemeProvider>
    </div>
  );
};

export default layout;
