import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Repeat2, Camera as CameraIcon } from "lucide-react";

/**
 * One self-contained looping mockup per service — each animation is meant to read, at a
 * glance, as "this is what that discipline looks like in motion" without faking a
 * screenshot of real client work. All animations are CSS/SVG/Framer Motion only
 * (already in use elsewhere on the site), transform/opacity-driven where possible, and
 * tuned to stay subtle behind the card's actual text content.
 */

// ---------- Website Development: cycling Python / MongoDB / React typewriter ----------

interface CodeLine {
  text: string;
  cls?: string; // tailwind color class for the whole line, default dim white
}

const CODE_SCENES: { lang: string; lines: CodeLine[] }[] = [
  {
    lang: "main.py",
    lines: [
      { text: "def get_active_users(db):", cls: "text-accent/80" },
      { text: "    query = {\"status\": \"active\"}" },
      { text: "    return db.users.find(query)" },
      { text: "" },
      { text: "@app.get(\"/api/users\")", cls: "text-white/30" },
      { text: "async def list_users():" },
    ],
  },
  {
    lang: "schema.js",
    lines: [
      { text: "db.users.find({", cls: "text-accent/80" },
      { text: "  status: \"active\"," },
      { text: "  plan: { $in: [\"pro\", \"team\"] }" },
      { text: "}).sort({ createdAt: -1 })" },
      { text: "" },
      { text: "// index: { status: 1, plan: 1 }", cls: "text-white/30" },
    ],
  },
  {
    lang: "Hero.tsx",
    lines: [
      { text: "export function Hero() {", cls: "text-accent/80" },
      { text: "  const [open, setOpen] = useState(false);" },
      { text: "" },
      { text: "  return (" },
      { text: "    <section className=\"hero\">" },
      { text: "      <Button onClick={() => setOpen(true)} />" },
    ],
  },
];

export const WebDevMockup = () => {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSceneIndex((i) => (i + 1) % CODE_SCENES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  const scene = CODE_SCENES[sceneIndex];

  return (
    <div className="w-full h-full flex flex-col p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
        </div>
        <span className="text-[9px] font-mono text-white/25">{scene.lang}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={sceneIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.4 }}
          className="space-y-1.5 font-mono text-[10px] leading-snug flex-1"
        >
          {scene.lines.map((line, i) => (
            <TypedLine key={i} text={line.text} className={line.cls ?? "text-white/45"} delay={i * 0.22} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/** A single line that types itself out character-by-character, then sits still. */
const TypedLine = ({ text, className, delay }: { text: string; className: string; delay: number }) => {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    if (!text) return;
    let i = 0;
    const startTimeout = setTimeout(() => {
      const id = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, 18);
      return () => clearInterval(id);
    }, delay * 1000);
    return () => clearTimeout(startTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className={className} style={{ whiteSpace: "pre" }}>
      {shown || "\u00A0"}
    </div>
  );
};

// ---------- Social Media Management: post cards + rising engagement ----------

export const SocialMockup = () => {
  const bars = [38, 55, 42, 70, 60, 85, 65];
  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2.5 text-white/40">
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={11} className="text-accent/80" fill="currentColor" />
          </motion.span>
          <MessageCircle size={11} />
          <Repeat2 size={11} />
        </div>
        <span className="text-[9px] text-white/30">Engagement — 7d</span>
      </div>
      <div className="flex-1 flex items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/70 to-accent/30"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </div>
  );
};

// ---------- UI/UX Design: cursor dragging a frame on canvas ----------

export const UIUXMockup = () => (
  <div className="w-full h-full p-4 relative">
    <div className="absolute inset-4 rounded-md border border-dashed border-white/10" />
    {/* The frame being drawn/resized */}
    <motion.div
      className="absolute rounded-md border-2 border-accent/70 bg-accent/[0.07]"
      initial={{ width: 18, height: 14, top: 14, left: 14 }}
      animate={{
        width: [18, 70, 70, 18],
        height: [14, 46, 46, 14],
        top: [14, 14, 14, 14],
        left: [14, 14, 14, 14],
      }}
      transition={{ duration: 3.6, repeat: Infinity, ease: [0.45, 0, 0.2, 1], times: [0, 0.4, 0.75, 1] }}
    >
      <span className="absolute -right-1 -bottom-1 w-1.5 h-1.5 rounded-full bg-accent" />
      <span className="absolute -right-1 -top-1 w-1.5 h-1.5 rounded-full bg-accent/60" />
      <span className="absolute -left-1 -bottom-1 w-1.5 h-1.5 rounded-full bg-accent/60" />
    </motion.div>
    {/* The cursor doing the dragging */}
    <motion.div
      className="absolute"
      initial={{ top: 14, left: 14 }}
      animate={{ top: [14, 60, 60, 14], left: [14, 84, 84, 14] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: [0.45, 0, 0.2, 1], times: [0, 0.4, 0.75, 1] }}
    >
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
        <path d="M1 1L1 12.5L4.2 9.6L6.3 13.2L8 12.2L5.9 8.6L10 8.3L1 1Z" fill="white" stroke="black" strokeWidth="0.6" />
      </svg>
    </motion.div>
  </div>
);

// ---------- Graphic Design: layout blocks assembling into a brand composition ----------

export const GraphicMockup = () => (
  <div className="w-full h-full p-4 flex items-center justify-center">
    <div className="relative w-full h-full grid grid-cols-3 grid-rows-2 gap-1.5">
      {[
        { delay: 0, color: "bg-accent/60" },
        { delay: 0.15, color: "bg-white/15" },
        { delay: 0.3, color: "bg-white/10" },
        { delay: 0.45, color: "bg-white/10" },
        { delay: 0.6, color: "bg-accent/30" },
        { delay: 0.75, color: "bg-white/15" },
      ].map((block, i) => (
        <motion.div
          key={i}
          className={`rounded-sm ${block.color}`}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: block.delay,
            repeat: Infinity,
            repeatDelay: 2.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      ))}
    </div>
  </div>
);

// ---------- Videography: cinematic preview, play glow + focus marks + scrubber ----------

export const VideoMockup = () => (
  <div className="w-full h-full flex flex-col p-4">
    <div className="flex-1 rounded-md bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden">
      {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} w-2.5 h-2.5 border-accent/40`}
          style={{
            borderTopWidth: pos.includes("top") ? 1.5 : 0,
            borderBottomWidth: pos.includes("bottom") ? 1.5 : 0,
            borderLeftWidth: pos.includes("left") ? 1.5 : 0,
            borderRightWidth: pos.includes("right") ? 1.5 : 0,
          }}
        />
      ))}
      <motion.div
        className="w-9 h-9 rounded-full border-2 border-accent/50 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: ["0 0 0px hsl(var(--blue-glow)/0)", "0 0 14px hsl(var(--blue-glow)/0.6)", "0 0 0px hsl(var(--blue-glow)/0)"],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-accent ml-0.5" />
      </motion.div>
    </div>
    <div className="flex items-center gap-1 mt-2.5">
      <div className="flex-1 h-1.5 rounded-full bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/4 rounded-full bg-accent/70"
          animate={{ left: ["0%", "75%", "0%"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  </div>
);

// ---------- Video Editing: post-production timeline, playhead, waveform, grading ----------

export const VideoEditingMockup = () => (
  <div className="w-full h-full flex flex-col p-4 justify-center gap-2">
    <div className="relative h-4 flex gap-0.5">
      {[30, 22, 35, 13].map((w, i) => (
        <div key={i} className={`h-full rounded-sm ${i === 1 ? "bg-accent/40" : "bg-white/10"}`} style={{ width: `${w}%` }} />
      ))}
      <motion.div
        className="absolute top-[-3px] bottom-[-3px] w-[1.5px] bg-accent"
        animate={{ left: ["0%", "97%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1 -left-[3px] w-[7px] h-[7px] rounded-full bg-accent" />
      </motion.div>
    </div>
    <div className="flex items-center gap-[2px] h-6">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full bg-white/15"
          animate={{ height: [`${20 + (i % 5) * 8}%`, `${40 + (i % 7) * 8}%`, `${20 + (i % 5) * 8}%`] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
        />
      ))}
    </div>
    <div className="h-1 rounded-full bg-gradient-to-r from-white/10 via-accent/40 to-accent/70 relative">
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-accent"
        animate={{ left: ["10%", "85%", "10%"] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </div>
);

// ---------- Photography: focus ring + shutter blink + dimming grid ----------

export const PhotoMockup = () => (
  <div className="w-full h-full p-4 relative flex items-center justify-center">
    <div className="absolute inset-4 grid grid-cols-3 grid-rows-2 gap-1.5">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="rounded-sm bg-white/[0.05] border border-white/10"
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </div>
    <motion.div
      className="relative w-9 h-9 rounded-full border-2 border-accent/60 flex items-center justify-center z-10"
      animate={{ scale: [1, 0.85, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", times: [0, 0.08, 1] }}
    >
      <CameraIcon size={14} className="text-accent/80" />
      <motion.span
        className="absolute inset-0 rounded-full bg-white"
        animate={{ opacity: [0, 0, 0.55, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, times: [0, 0.04, 0.08, 0.16], ease: "easeOut" }}
      />
    </motion.div>
  </div>
);

// ---------- Motion Graphics Design: morphing shape + keyframe timeline ----------

export const MotionMockup = () => (
  <div className="w-full h-full p-4 flex flex-col justify-center gap-3">
    <div className="relative h-12 flex items-center justify-center">
      <motion.div
        className="w-7 h-7 rounded-lg bg-accent/25 border border-accent/50"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["20%", "50%", "20%"],
          x: [-18, 18, -18],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <div className="relative h-px bg-white/10">
      {[0.1, 0.35, 0.6, 0.85].map((pos, i) => (
        <motion.span
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-accent/70"
          style={{ left: `${pos * 100}%` }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-[1px] h-3 bg-white/40"
        animate={{ left: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
);
