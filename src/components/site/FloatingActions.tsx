import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SCHOOL } from "@/lib/school";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SCHOOL.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20about%20admissions`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="size-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-glow hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="size-6" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="size-12 grid place-items-center rounded-full gradient-royal text-white shadow-glow hover:-translate-y-1 transition-transform"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  );
}
