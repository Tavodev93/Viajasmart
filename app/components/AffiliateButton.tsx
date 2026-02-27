"use client";

type Props = {
  href: string;
  label: string;
  eventName: string;
};

export default function AffiliateButton({ href, label, eventName }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", eventName, {
            event_category: "affiliate",
            event_label: href,
          });
        }
      }}
      className="inline-block mt-6 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition"
    >
      {label}
    </a>
  );
}