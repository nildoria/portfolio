import Link from "next/link";

function SingleProject({ project, index }) {
  const { name, description, tools, role, code, demo } = project;

  return (
    <li className="border-b border-line py-10">
      <div className="flex items-baseline justify-between gap-6">
        <span className="text-sm text-low tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        {role ? <span className="text-sm text-low">{role}</span> : null}
      </div>

      <h3 className="mt-3 text-xl leading-[1.3] text-hi">{name}</h3>

      <p className="mt-3 max-w-[68ch] text-[0.9375rem] leading-[1.65] text-mid">
        {description}
      </p>

      {tools?.length ? (
        <p className="mt-4 text-[0.8125rem] text-low">{tools.join(" · ")}</p>
      ) : null}

      {(code || demo) && (
        <div className="mt-4 flex items-center gap-6">
          {code ? (
            <Link
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent transition-colors duration-150 hover:underline"
            >
              Source
            </Link>
          ) : null}
          {demo ? (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent transition-colors duration-150 hover:underline"
            >
              Live demo
            </Link>
          ) : null}
        </div>
      )}
    </li>
  );
}

export default SingleProject;
