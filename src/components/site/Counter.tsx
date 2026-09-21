import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  label: string;
}

function parse(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value, numeric: false };
  return { target: Number(match[1]), suffix: match[2] ?? "", numeric: true };
}

export function Counter({ value, label }: CounterProps) {
  const { target, suffix, numeric } = parse(value);
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(numeric ? 0 : target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !numeric || typeof IntersectionObserver === "undefined") return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [numeric, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-gold text-4xl font-bold tracking-tight md:text-5xl">
        {numeric ? display : value}
        {numeric ? suffix : ""}
      </div>
      <div className="mt-2 text-sm font-medium tracking-[0.12em] text-white/70 uppercase">
        {label}
      </div>
    </div>
  );
}
