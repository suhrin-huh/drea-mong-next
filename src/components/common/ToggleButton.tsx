"use client";

interface ToggleButtonProps {
  flag: Boolean;
  handleFlag?: () => void;
}

export default function ToggleButton({ flag, handleFlag }: ToggleButtonProps) {
  return (
    <button
      id="toggle-button"
      onClick={handleFlag}
      className={`relative h-6 w-10 rounded-full ${flag ? "bg-primary" : "bg-secondary"} transition`}
    >
      <span
        className={`absolute left-1 top-1 h-4 w-4 rounded-full border border-black/10 bg-white transition-transform ${flag ? "translate-x-4" : ""}`}
        id="toggle-switch"
      />
    </button>
  );
}
