import { cn } from "@/shared/utils/cn";

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-[#BF9B30]/20 text-[#BF9B30] px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
}; 