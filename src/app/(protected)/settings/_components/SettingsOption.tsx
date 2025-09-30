"use client";

interface SettingsOptionProps {
  label: string;
  icon?: React.ReactNode;
  handleClick: () => void;
}

export default function SettingsOption({ label, icon: Icon, handleClick }: SettingsOptionProps) {
  return (
    <div
      className="p-lg active:bg-secondary/20 flex items-center justify-between"
      onClick={handleClick}
    >
      <p>{label}</p>
      {Icon}
    </div>
  );
}

// TODO: 핸드폰 고려시에 hover -> active 고려 필요
