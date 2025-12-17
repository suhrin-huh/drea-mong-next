"use client";

interface ToggleButtonProps {
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ToggleButton({ name, checked, onChange }: ToggleButtonProps) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      {/* 실제 form값 */}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />

      {/* 토글 트랙 */}
      <span
        className={`relative h-6 w-10 rounded-full transition ${checked ? "bg-primary" : "bg-secondary"} `}
      >
        {/* 토글 썸 */}
        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full border border-black/10 bg-white transition-transform ${checked ? "translate-x-4" : ""} `}
        />
      </span>
    </label>
  );
}
