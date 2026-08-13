import { ReactNode, useEffect, useRef, useState } from "react";

interface DeferredSectionProps {
  children: ReactNode;
  minHeight?: string;
}

const DeferredSection = ({ children, minHeight = "28rem" }: DeferredSectionProps) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || visible) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(host);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={hostRef} className="deferred-section" style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export default DeferredSection;
