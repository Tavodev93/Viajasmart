"use client";

type Props = {
  href: string;
  label: string;
};

export default function AffiliateButton({ href, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "click_islas_rosario", {
            event_category: "affiliate",
            event_label: "boton_principal",
          });
        }
      }}
      className="inline-block mt-4 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition"
    >
      {label}
    </a>
  );
}