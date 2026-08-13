import type { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Marquee({
  children,
  direction = "left",
  repeat = 4,
  duration = 60,
  paused = false,
  pauseOnHover = true,
  className,
  style,
  ...props
}: {
  children: ReactNode
  direction?: "left" | "right"
  repeat?: number
  duration?: number
  paused?: boolean
  pauseOnHover?: boolean
  className?: string
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden [--gap:1rem]",
        className
      )}
      style={{ ...style, "--duration": `${duration}s` } as CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "badtz-marquee-left": direction === "left",
              "badtz-marquee-right": direction === "right",
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-play-state:paused]": paused,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
