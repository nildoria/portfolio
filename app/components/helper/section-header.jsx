function SectionHeader({ index, label, title }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3">
        <span className="text-xs text-low tabular-nums">{index}</span>
        <span className="text-xs uppercase tracking-[0.12em] text-mid">{label}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      {title ? (
        <h2 className="mt-4 text-[2rem] leading-[1.15] tracking-[-0.01em] text-hi">
          {title}
        </h2>
      ) : null}
    </div>
  );
}

export default SectionHeader;
