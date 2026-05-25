export default function EomanLogo({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="58" fill="white" stroke="#e5e7eb" strokeWidth="1" />

      {/* Colorful petal mandala */}
      <g transform="translate(60,60)">
        {/* Purple petals */}
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#8B5CF6" opacity="0.9" transform="rotate(0)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#7C3AED" opacity="0.85" transform="rotate(30)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#6D28D9" opacity="0.8" transform="rotate(60)" />
        {/* Blue petals */}
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#3B82F6" opacity="0.9" transform="rotate(90)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#2563EB" opacity="0.85" transform="rotate(120)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#1D4ED8" opacity="0.8" transform="rotate(150)" />
        {/* Green petals */}
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#10B981" opacity="0.9" transform="rotate(180)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#059669" opacity="0.85" transform="rotate(210)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#047857" opacity="0.8" transform="rotate(240)" />
        {/* Pink/red petals */}
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#EC4899" opacity="0.9" transform="rotate(270)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#DB2777" opacity="0.85" transform="rotate(300)" />
        <ellipse cx="0" cy="-28" rx="7" ry="16" fill="#BE185D" opacity="0.8" transform="rotate(330)" />

        {/* Inner white circle */}
        <circle cx="0" cy="0" r="20" fill="white" />

        {/* "e" letter */}
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontSize="20"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
          fill="#1e293b"
          letterSpacing="-1"
        >
          e
        </text>
      </g>

      {/* عُمانا text below the mandala */}
      <text
        x="60"
        y="100"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fontFamily="Cairo, Arial, sans-serif"
        fill="#1e293b"
      >
        عُمانا
      </text>
    </svg>
  );
}
