import React from "react";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/providers/NextThemeProvider";
import { Toaster } from "react-hot-toast";
import DashboardSidebar from "@/components/DashboardSidebar";

const Layout = ({ children }) => {
  return (
    <>
      <NextThemeProvider>
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto grid grid-cols-12">
            <div className="col-span-3">
              <DashboardSidebar />
            </div>
            <div className="col-span-9">
              {children}
              <Toaster />
            </div>
          </div>
        </main>
      </NextThemeProvider>
    </>
  );
};

export default Layout;
