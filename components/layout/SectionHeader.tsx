import { cn } from "@/lib/utils";



type SectionHeaderProps = {

  label: string;

  title: string;

  description?: string;

  align?: "center" | "start";

  className?: string;

};



export default function SectionHeader({

  label,

  title,

  description,

  align = "center",

  className,

}: SectionHeaderProps) {

  return (

    <header

      className={cn(

        "mb-12 md:mb-16 lg:mb-20",

        align === "center" ? "text-center" : "text-start",

        className

      )}

    >

      <p className="type-label text-gold mb-3 md:mb-4">{label}</p>

      <h2 className="type-h2 text-foreground mb-4 md:mb-5">{title}</h2>

      {description && (

        <p

          className={cn(

            "type-lead text-muted-foreground max-w-2xl",

            align === "center" && "mx-auto"

          )}

        >

          {description}

        </p>

      )}

    </header>

  );

}

