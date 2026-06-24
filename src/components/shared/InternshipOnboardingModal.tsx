import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface InternshipOnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// TODO: Add the real internship group link in VITE_INTERNSHIP_GROUP_URL
const INTERNSHIP_GROUP_URL = import.meta.env.VITE_INTERNSHIP_GROUP_URL as string | undefined;

/**
 * Shown after a successful Internship application, once the standard success screen has
 * displayed for 2 seconds. Does not auto-redirect anywhere — the intern closes it manually
 * (X button, Escape key, or clicking the overlay outside the card, all handled by Radix's
 * Dialog primitive) whenever they're ready.
 *
 * Built directly on @radix-ui/react-dialog rather than the shared src/components/ui/dialog.tsx
 * wrapper, because that wrapper always renders its own hardcoded close button with no way to
 * omit it — this modal needs a single custom-styled close button, not two.
 */
const InternshipOnboardingModal = ({ open, onOpenChange }: InternshipOnboardingModalProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Dialog.Content
        className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative rounded-2xl p-7 sm:p-9 text-center overflow-hidden"
          style={{
            background: "hsl(var(--primary) / 0.65)",
            backdropFilter: "blur(20px)",
            border: "1px solid hsl(var(--accent) / 0.25)",
            boxShadow: "0 20px 60px hsl(0 0% 0% / 0.5), 0 0 40px hsl(var(--accent) / 0.08)",
          }}
        >
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-1.5 text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50">
            <X size={18} />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <Dialog.Title className="text-xl sm:text-2xl font-display font-bold text-primary-foreground mb-4 pr-6">
            Next Step for Interns
          </Dialog.Title>

          <Dialog.Description className="text-sm text-primary-foreground/70 leading-relaxed mb-7">
            Message to interns: Once you join the group, introduce yourself with a clear image of yourself, what
            you want to learn, and what you intend to gain from the internship based on your learning path.
          </Dialog.Description>

          {INTERNSHIP_GROUP_URL ? (
            <Button asChild variant="accent" size="lg" className="w-full">
              <a href={INTERNSHIP_GROUP_URL} target="_blank" rel="noopener noreferrer">
                Join the Internship Group
                <ArrowUpRight size={16} className="ml-1.5" />
              </a>
            </Button>
          ) : (
            <Button variant="accent" size="lg" className="w-full" disabled>
              Group link coming soon
            </Button>
          )}
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default InternshipOnboardingModal;
