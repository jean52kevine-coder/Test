const PopularBadge = () => (
  <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full overflow-hidden border border-[#1DB954]/40">
    <div
      className="absolute inset-0 bg-linear-to-r from-[#1DB954]/15 via-[#1DB954]/25 to-[#1DB954]/15 animate-pulse"
      style={{ animationDuration: '2s' }}
    />

    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1DB954]" />
    </span>

    <span
      className="relative text-[#1DB954] text-xs font-semibold tracking-widest uppercase"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Le plus choisi
    </span>
  </div>
);

export default PopularBadge;
