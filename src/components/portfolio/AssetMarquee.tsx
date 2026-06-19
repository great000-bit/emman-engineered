import { motion } from "framer-motion";
import ProtectedImage from "@/components/shared/ProtectedImage";

interface AssetMarqueeProps {
  images: string[];
  /** seconds for one full loop */
  duration?: number;
}

// Rolling horizontal marquee of brand asset mockups (logo variations, business cards,
// social mockups, stationery, packaging). Pure CSS/Framer transform loop, no video needed.
const AssetMarquee = ({ images, duration = 22 }: AssetMarqueeProps) => {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-5"
        animate={{ x: [0, -(images.length * 280)] }}
        transition={{ x: { duration, repeat: Infinity, ease: "linear" } }}
        style={{ width: "fit-content" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-64 flex-shrink-0 rounded-xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/[0.03] aspect-[4/3]"
          >
            <ProtectedImage
              src={src}
              alt="Brand asset mockup"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AssetMarquee;
