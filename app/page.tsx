export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For CS Professors &amp; Bootcamps
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Detect AI-Generated Code in{" "}
          <span className="text-[#58a6ff]">Student Submissions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload coding assignments and instantly identify AI-generated patterns. Get detailed evidence reports with syntax analysis, pattern matching, and confidence scores — so you can act with confidence.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Detecting — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="font-semibold text-white mb-2">Pattern Analysis</h3>
            <p className="text-sm text-[#8b949e]">Detects hallmark AI code patterns: over-commented blocks, unnatural variable naming, and boilerplate structures.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-semibold text-white mb-2">Evidence Reports</h3>
            <p className="text-sm text-[#8b949e]">Generates exportable PDF reports with highlighted code sections, confidence scores, and reasoning for each flag.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-semibold text-white mb-2">Bulk Uploads</h3>
            <p className="text-sm text-[#8b949e]">Analyze entire class submissions at once. Supports .py, .js, .java, .cpp, and more in a single batch.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-2">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to keep your classroom honest</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited submissions per month",
              "AI pattern + syntax analysis",
              "Exportable PDF evidence reports",
              "Bulk upload (zip files)",
              "Supports 10+ languages",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the AI detection?</h3>
            <p className="text-sm text-[#8b949e]">Our system combines multiple signals — syntax entropy, comment density, naming conventions, and structural patterns — achieving over 90% accuracy on benchmark datasets. Reports always include confidence scores so you can make informed decisions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which programming languages are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support Python, JavaScript, TypeScript, Java, C, C++, C#, Go, Ruby, and PHP. More languages are added regularly based on user requests.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is student data kept private?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Submissions are processed in isolated environments, never used for training, and deleted after report generation. We are FERPA-compliant and do not share data with third parties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} CodeGuard. All rights reserved.
      </footer>
    </main>
  );
}
