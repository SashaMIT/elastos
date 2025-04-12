export default function SiteFooter() {
  return (
    <div className="flex flex-col items-center">
      <a
        href="https://blog.elastos.net/contact-us/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#94b5ff] text-sm font-normal mb-1 hover:underline"
      >
        Contact Us
      </a>
      <p className="text-sm text-muted-foreground">
        © 2025 Elastos. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a 
          href="https://blog.elastos.net/privacy-policy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Privacy Policy
        </a>
        <a 
          href="https://blog.elastos.net/cookie-policy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Cookie Policy
        </a>
      </div>
    </div>
  );
}