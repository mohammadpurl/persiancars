type MapEmbedProps = {
  src: string;
  title?: string;
  className?: string;
  loading?: "eager" | "lazy";
};

/** iframe نقشه با ارتفاع صریح — والد باید relative + min-height داشته باشد */
export default function MapEmbed({
  src,
  title = "موقعیت روی نقشه",
  className = "h-[260px] sm:h-[300px] lg:min-h-[360px]",
  loading = "lazy",
}: MapEmbedProps) {
  return (
    <div className={`relative w-full overflow-hidden bg-muted/30 ${className}`}>
      <iframe
        title={title}
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        loading={loading}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
