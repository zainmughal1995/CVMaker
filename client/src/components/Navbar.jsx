// Navbar
// Modern glassmorphism + gradient + glow + curves

export default function Navbar() {
  return (
    <div className="relative">
      {/* glow background */}
      <div className="absolute border inset-0 -z-10 blur-3xl opacity-80 bg-gradient-to-r from-black via-blue-800 to-orange-500"></div>

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
        <h1 className="text-2xl font-semibold text-black tracking-wide">
          ATS CV Builder
        </h1>

        {/* Right side */}
      </nav>
    </div>
  );
}
