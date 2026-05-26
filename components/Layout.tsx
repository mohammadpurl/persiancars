"use client";

import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {showScrollToTop && (
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-8 left-8 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-40"
          onClick={scrollToTop}
          aria-label="بازگشت به بالا"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Layout;
