"use client";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  closeOnOutsideClick = true,
  children,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div
      onClick={() => closeOnOutsideClick && onClose()}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[300px] rounded-md bg-white p-[24px]"
      >
        {children}
      </div>
    </div>
  );
}
