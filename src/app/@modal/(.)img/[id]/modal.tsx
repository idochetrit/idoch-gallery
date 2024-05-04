"use client";

import { useRouter } from "next/navigation";
import { useRef, type ElementRef, useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const diaglogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!diaglogRef.current?.open) {
      diaglogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={diaglogRef}
      className="m-0 h-screen w-screen bg-zinc-900/50"
      onClose={onDismiss}
    >
      {children}
      <button onClick={onDismiss} className="close-button" />
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
