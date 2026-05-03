import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeGuard – Detect AI-Generated Code in Student Submissions",
  description: "Analyzes coding assignments to identify AI-generated code patterns and provides detailed evidence reports for professors and coding bootcamps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fb4558e4-5360-413f-a4d6-e4a8cb86518d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
