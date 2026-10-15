
function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white container mx-auto">
      <div className="mx-auto max-w-[1480px] px-6 py-12 md:px-10 lg:px-14">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand section */}
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Dev Stack home"
            >
              {/* Dev Stack logo */}
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
                DS
              </span>

              <span className="text-[21px] font-bold tracking-tight text-slate-900">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </a>

            <p className="mt-5 max-w-md text-[15px] leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-pink-600"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-pink-600"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="footer-link">Home</a>
              </li>
              <li>
                <a href="/technologies" className="footer-link">
                  Technologies
                </a>
              </li>
              <li>
                <a href="/projects" className="footer-link">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="footer-link">About</a>
              </li>
              <li>
                <a href="/contact" className="footer-link">Contact</a>
              </li>
              <li>
                <a href="/careers" className="footer-link">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-7">
            <a
              href="/privacy-policy"
              className="text-sm text-slate-400 transition-colors hover:text-pink-600"
            >
              Privacy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-slate-400 transition-colors hover:text-pink-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
