export default function Footer() {
  return (
    <footer className="relative">

      {/* ── Dark red footer bar ── */}
      <div
        className="relative flex flex-col items-center justify-center gap-4 py-8 px-6"
        style={{ background: "linear-gradient(180deg, #7a0e0e 0%, #5a0808 100%)" }}
      >
        {/* Logo — pojok kiri */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          {/* Ganti src dengan path logo UNHAS MUN kamu */}
          <img
            src="/images/logo.png"
            alt="UNHAS MUN Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-white text-sm font-medium">
          © 2025 Unhas MUN, All rights reserved.
        </p>

        {/* Social media icons */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a
            href="https://instagram.com/"   {/* ← ganti dengan link Instagram kamu */}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/70 transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"   {/* ← ganti dengan link LinkedIn kamu */}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/70 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}