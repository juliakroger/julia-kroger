import { useEffect, useRef, useState } from "react";

const SCRAMBLE_GLYPHS = "01X#<>/[]{}-+=_";

export const useScrambleText = (label: string) => {
  const [visibleLabel, setVisibleLabel] = useState(label);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setVisibleLabel(label);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [label]);

  const scramble = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);

    let iteration = 0;
    let previousTimestamp = 0;

    const animate = (timestamp: number) => {
      if (timestamp - previousTimestamp < 34) {
        frameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      previousTimestamp = timestamp;
      const resolvedCharacters = Math.floor(iteration);

      setVisibleLabel(
        label
          .split("")
          .map((character, index) => {
            if (character === " ") return " ";
            if (index < resolvedCharacters) return character;

            const glyphIndex = Math.floor(Math.random() * SCRAMBLE_GLYPHS.length);
            return SCRAMBLE_GLYPHS[glyphIndex];
          })
          .join("")
      );

      if (resolvedCharacters >= label.length) {
        setVisibleLabel(label);
        frameRef.current = null;
        return;
      }

      iteration += 0.46;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);
  };

  return { visibleLabel, scramble };
};

export const ScrambleWord = ({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) => {
  const { visibleLabel, scramble } = useScrambleText(label);

  return (
    <span
      className={`scramble-word${className ? ` ${className}` : ""}`}
      aria-label={label}
      onPointerEnter={scramble}
    >
      <span className="scramble-word__sizer" aria-hidden="true">
        {label}
      </span>
      <span className="scramble-word__value" aria-hidden="true">
        {visibleLabel}
      </span>
    </span>
  );
};
