import { ImgHTMLAttributes } from "react";

/**
 * Wraps a standard <img> with basic, honest download deterrents:
 * no drag-out, no right-click save, no text-selection on the image area.
 * None of this can fully stop someone determined to take an image off the web —
 * it just removes the easy/casual paths (drag-to-desktop, right-click → Save As).
 * Alt text is always required so screen readers aren't affected.
 */
interface ProtectedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Optional small corner watermark, e.g. "Creative Emman" — off by default. */
  watermark?: boolean;
  wrapperClassName?: string;
}

const ProtectedImage = ({
  src,
  alt,
  watermark = false,
  className = "",
  wrapperClassName = "",
  ...rest
}: ProtectedImageProps) => {
  const imgEl = (
    <img
      src={src}
      alt={alt}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className={`select-none ${className}`}
      style={{ WebkitUserDrag: "none" } as React.CSSProperties}
      {...rest}
    />
  );

  // No watermark and no extra wrapper styling requested → render the <img> directly.
  // This matters because callers frequently pass `absolute inset-0 w-full h-full` expecting
  // to fill a positioned ancestor (e.g. a card with aspect-ratio); wrapping in an extra
  // unstyled <div> would create a zero-size positioning context and collapse the image.
  if (!watermark && !wrapperClassName) {
    return imgEl;
  }

  return (
    <div className={`relative select-none ${wrapperClassName}`}>
      {imgEl}
      {watermark && (
        <span className="absolute bottom-2 right-2 text-[10px] font-medium tracking-wide text-white/40 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded select-none pointer-events-none">
          Creative Emman
        </span>
      )}
    </div>
  );
};

export default ProtectedImage;
