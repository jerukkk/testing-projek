export default function Footer() {
  return (
    <footer className="relative">

      {/* ── Transition image ── */}
      <div className="w-full">
        <img
          src="/Rectangle 185 (1).svg"
          alt=""
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* ── Dark red footer bar ── */}
      <div
        className="relative flex flex-col items-center justify-center gap-4 py-8 px-6 md:px-6"
        style={{ backgroundColor: "#710004" }}
      >
        {/* Logo — pojok kiri */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
          <img
            src="/LOGO UNHASMUN 25 (1).webp"
            alt="UNHAS MUN Logo"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-white text-xs md:text-sm font-medium text-center mt-12 md:mt-0">
          © 2026 Unhas MUN, All rights reserved.
        </p>

        {/* Social media icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/unhasmun/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/70 transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
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
            href="https://id.linkedin.com/company/unhas-mun-community"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/70 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
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
