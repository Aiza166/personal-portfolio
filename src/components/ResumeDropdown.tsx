import { Download } from "lucide-react";

interface ResumeDownloadProps {
  variant?: "pill" | "compact";
}

const ResumeDownload = ({ variant = "pill" }: ResumeDownloadProps) => {
  const resumePath = "public/Aiza_Gazyani - Resume.pdf"; 

  return (
    <a
      href={resumePath}
      download
      className={
        variant === "compact"
          ? "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 text-[12px] font-mono tracking-wide"
          : "group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
      }
    >
      <Download className={variant === "compact" ? "w-3.5 h-3.5" : "w-4 h-4 text-primary"} />
      <span className={variant === "compact" ? "" : "font-mono text-xs tracking-widest uppercase text-foreground"}>
        Resume
      </span>
    </a>
  );
};

export default ResumeDownload;
