import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function SectionShell({
  id,
  children,
  className,
  containerClassName,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={cn("container-site", containerClassName)}>{children}</div>
    </section>
  );
}
