interface LogoMarkProps {
  size?: number;
}

/** Pixel-grid logo mark with a single clay accent cell. */
export default function LogoMark({ size = 22 }: LogoMarkProps) {
  const cells = [0, 9, 18, 27, 36];
  return (
    <svg viewBox="0 0 42 42" width={size} height={size} fill="none" aria-hidden="true">
      {cells.map((x) =>
        cells.map((y) => {
          if (x === 18 && y === 18) return null;
          const isAccent = x === 18 && y === 9;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="6"
              height="6"
              fill={isAccent ? "#c75d3a" : "currentColor"}
            />
          );
        })
      )}
    </svg>
  );
}
