import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="flex-1"
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);

export default PageLayout;
