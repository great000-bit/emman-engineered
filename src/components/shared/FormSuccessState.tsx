import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

/**
 * Shared success screen for the Contact form and both Applications forms (Professional
 * Role / Internship). Shows the required copy + a looping blue/cyan mail icon, then
 * after 4 seconds returns the user to wherever they came from (browser history), or
 * home if there's no previous page in this session.
 */
const FormSuccessState = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // history.state.idx is set by react-router's BrowserHistory — > 0 means there is
      // a previous entry in this session to go back to; otherwise fall back to home.
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center py-20 space-y-5"
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Soft pulsing glow behind the icon, blue/cyan, matches the site's existing glow style */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/20"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mail size={32} className="text-accent" strokeWidth={1.75} />
          </motion.div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
        Thank you. Your message has been received successfully.
      </h2>
      <p className="text-sm text-muted-foreground max-w-md">
        Our team will reach back to you within 1 hour. Please stay close to your email so you do not miss our
        response.
      </p>
    </motion.div>
  );
};

export default FormSuccessState;
