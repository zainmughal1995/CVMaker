// Navbar
// Modern glassmorphism + gradient + glow + curves

export default function Navbar() {
  return (
    <div className="relative">
      {/* glow background */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <nav
        className="
        h-16
        mx-4 mt-4
        px-8
        flex
        items-center
        justify-between
        rounded-2xl
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
      >
        {/* Title */}
        <h1 className="text-lg font-semibold text-black tracking-wide">
          ATS CV Builder
        </h1>

        {/* Right side */}
      </nav>
    </div>
  );
}
