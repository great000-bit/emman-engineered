import { motion } from "framer-motion";
import { Code2, Palette, PenTool, Video, Film, Camera, Share2 } from "lucide-react";

/**
 * Tiny self-contained looping mockup windows — one per service.
 * Mirrors the bento-grid reference: a soft "browser-like" card with
 * a small continuous micro-animation that hints at the real service
 * without faking a screenshot of real client work.
 */

const shimmer = {
  animate: { backgroundPositionX: ["0%", "-200%"] },
  transition: { duration: 2.2, repeat: Infinity, ease: "linear" as const },
};

export const WebDevMockup = () => (
  <div className="w-full h-full flex flex-col p-4">
    <div className="flex gap-1.5 mb-3">
      <span className="w-2 h-2 rounded-full bg-white/15" />
      <span className="w-2 h-2 rounded-full bg-white/15" />
      <span className="w-2 h-2 rounded-full bg-white/15" />
    </div>
    <div className="space-y-1.5 font-mono text-[10px] text-white/35 flex-1">
      <div>
        <span className="text-accent/70">const</span> Hero = () =&gt; {"{"}
      </div>
      <motion.div
        className="h-2 rounded-sm bg-gradient-to-r from-white/15 via-white/35 to-white/15 bg-[length:200%_100%]"
        style={{ width: "70%" }}
        animate={shimmer.animate}
        transition={shimmer.transition}
      />
      <div className="pl-3 opacity-60">return (</div>
      <motion.div
        className="h-2 rounded-sm bg-gradient-to-r from-white/10 via-white/25 to-white/10 bg-[length:200%_100%] ml-3"
        style={{ width: "55%" }}
        animate={shimmer.animate}
        transition={{ ...shimmer.transition, delay: 0.3 }}
      />
      <div className="pl-3 opacity-40">);</div>
      <div>{"}"}</div>
    </div>
  </div>
);

export const SocialMockup = () => {
  const bars = [38, 55, 42, 70, 60, 85, 65];
  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex items-center gap-1.5 mb-3 text-white/40 text-[10px]">
        <Share2 size={11} /> <span>Engagement — 7 days</span>
      </div>
      <div className="flex-1 flex items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm bg-accent/50"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </div>
  );
};

export const UIUXMockup = () => (
  <div className="w-full h-full grid grid-cols-3 gap-1.5 p-4">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        className={`rounded-md border border-white/10 ${i === 0 ? "bg-accent/15 border-accent/30" : "bg-white/[0.04]"} ${i === 1 ? "col-span-2" : ""}`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export const GraphicMockup = () => (
  <div className="w-full h-full flex flex-col gap-1.5 p-4 justify-center">
    {["Type / Headline", "Image / Subject", "Shape / Backdrop"].map((layer, i) => (
      <motion.div
        key={layer}
        className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-white/[0.04] border border-white/10"
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
      >
        <span className="text-[9px] text-white/40">{layer}</span>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? "hsl(var(--accent))" : "rgba(255,255,255,0.25)" }} />
      </motion.div>
    ))}
  </div>
);

export const VideoMockup = () => (
  <div className="w-full h-full flex flex-col p-4">
    <div className="flex-1 rounded-md bg-white/[0.03] border border-white/10 flex items-center justify-center relative">
      <motion.div
        className="w-9 h-9 rounded-full border-2 border-accent/50 flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-accent ml-0.5" />
      </motion.div>
    </div>
    <div className="flex gap-1 mt-2.5">
      {[40, 70, 30, 90, 55].map((w, i) => (
        <div key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: `${w}%` }} />
      ))}
    </div>
  </div>
);

export const PhotoMockup = () => (
  <div className="w-full h-full p-4 grid grid-cols-3 grid-rows-2 gap-1.5">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        className="rounded-sm bg-white/[0.05] border border-white/10"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
      />
    ))}
  </div>
);
