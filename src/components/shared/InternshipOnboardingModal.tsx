import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { X, BellRing, CircleCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface InternshipOnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/HsrWyV3WSoNKK1flHvllis?mode=gi_t";

const ONBOARDING_TASKS = [
  "Introduce yourself clearly",
  "Send a clear image of yourself",
  "State what you want to learn",
  "Explain what you intend to gain from the internship",
  "Mention your learning path or area of interest",
];

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
        className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md max-h-[88vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
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

          {/* Animated notification icon — purely visual "ringing" motion (a gentle, looped
              side-to-side rock plus a soft pulsing glow behind it), no sound of any kind. */}
          <div className="relative w-16 h-16 mx-auto mb-5 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full bg-accent/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, -12, 10, -8, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
              >
                <BellRing size={28} className="text-accent" strokeWidth={1.75} />
              </motion.div>
            </div>
          </div>

          <Dialog.Title className="text-xl sm:text-2xl font-display font-bold text-primary-foreground mb-4">
            New Message from the Internship Team Lead
          </Dialog.Title>

          <Dialog.Description className="text-sm text-primary-foreground/70 leading-relaxed mb-5">
            Please complete the following once you join the internship group:
          </Dialog.Description>

          <ul className="text-left space-y-3 mb-8">
            {ONBOARDING_TASKS.map((task) => (
              <li key={task} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 rounded-full bg-accent/15 p-1">
                  <CircleCheck size={16} className="text-accent" strokeWidth={2} />
                </span>
                <span className="text-sm text-primary-foreground/85 leading-relaxed">{task}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="accent" size="lg" className="w-full">
            <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
              Join the Internship Group
              <ArrowUpRight size={16} className="ml-1.5" />
            </a>
          </Button>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default InternshipOnboardingModal;
