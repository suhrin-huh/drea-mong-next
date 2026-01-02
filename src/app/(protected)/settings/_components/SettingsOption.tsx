"use client";

interface SettingsOptionProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export default function SettingsOption({ label, icon: Icon, onClick }: SettingsOptionProps) {
  return (
    <div
      className="flex items-center justify-between p-lg active:bg-secondary/20"
      onClick={onClick}
    >
      <p>{label}</p>
      {Icon}
    </div>
  );
}

// TODO: 핸드폰 고려시에 hover -> active 고려 필요
