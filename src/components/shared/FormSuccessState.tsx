import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface FormSuccessStateProps {
  /** Defaults to the standard contact/application copy. */
  heading?: string;
  /** Defaults to the standard "within 1 hour" supporting copy. */
  supportingText?: string;
  /**
   * Milliseconds before navigating back/home. Pass `null` to disable the auto-redirect
   * entirely — used by the Internship flow, which instead shows a follow-up modal and
   * must NOT navigate the intern away automatically.
   * Defaults to 4000.
   */
  redirectAfterMs?: number | null;
}

/**
 * Shared success screen for the Contact form and both Applications forms (Professional
 * Role / Internship). Shows the required copy + a looping blue/cyan mail icon.
 *
 * By default, after 4 seconds it returns the user to wherever they came from (browser
 * history), or home if there's no previous page in this session — this is the Contact /
 * Professional Role behavior, unchanged. Pass `redirectAfterMs={null}` to disable that
 * entirely (Internship flow) — the caller is then responsible for whatever happens next
 * (e.g. Applications.tsx runs its own separate 2-second timer to reveal the onboarding
 * modal; that timing is unrelated to and independent of this component).
 */
const FormSuccessState = ({
  heading = "Thank you. Your message has been received successfully.",
  supportingText = "Our team will reach back to you within 1 hour. Please stay close to your email so you do not miss our response.",
  redirectAfterMs = 4000,
}: FormSuccessStateProps = {}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectAfterMs === null) return;

    const timer = setTimeout(() => {
      // history.state.idx is set by react-router's BrowserHistory — > 0 means there is
      // a previous entry in this session to go back to; otherwise fall back to home.
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }, redirectAfterMs);

    return () => clearTimeout(timer);
  }, [navigate, redirectAfterMs]);

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

      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">{heading}</h2>
      <p className="text-sm text-muted-foreground max-w-md">{supportingText}</p>
    </motion.div>
  );
};

export default FormSuccessState;
