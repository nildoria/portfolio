const LAYERS = [
  { title: "Browser", items: null },
  { title: "Frontend", items: "React · TypeScript · Next.js · Tailwind" },
  {
    title: "API & Auth",
    items: "Node · Express · OAuth 2.0 · Gmail API",
  },
  {
    title: "Data",
    items: "PostgreSQL · Row-Level Security · WordPress REST",
  },
];

// Label on the connector *between* layer i and layer i+1.
const EDGES = ["", "REST", "SQL"];

function StackDiagram() {
  return (
    <div className="stack-diagram rounded-lg border border-line p-6">
      <p className="mb-5 text-xs uppercase tracking-[0.12em] text-low">
        Cloudflare · Fly.io · Docker · Git
      </p>

      {LAYERS.map((layer, i) => (
        <div key={layer.title}>
          <div className="stack-layer rounded-md border border-line px-4 py-3">
            <p className="stack-title text-[0.9375rem] text-mid">
              {layer.title}
            </p>
            {layer.items ? (
              <p className="stack-items mt-1 text-[0.8125rem] leading-relaxed text-low">
                {layer.items}
              </p>
            ) : null}
          </div>

          {i < LAYERS.length - 1 ? (
            <div className="flex items-center gap-3 py-2 pl-6">
              <span className="h-6 w-px bg-line" aria-hidden="true" />
              {EDGES[i] ? (
                <span className="text-[0.75rem] text-low">{EDGES[i]}</span>
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default StackDiagram;
