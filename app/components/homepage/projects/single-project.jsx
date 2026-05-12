import Link from 'next/link';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const SingleProject = ({ project }) => {
  const { name, description, tags, code, demo } = project;

  // Create a JS-safe variable name from project name
  const varName = name
    ?.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, c => c.toLowerCase()) || 'project';

  return (
    <div className="project-card group relative rounded-xl border border-[#1a1a3e] overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{ background: 'linear-gradient(135deg, #0a0a18 0%, #0e0e1f 100%)' }}>

      {/* Top gradient border line — identical to hero */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2d78] to-[#8b2cff]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#8b2cff] to-[#00e5ff]"></div>
      </div>

      {/* Card header with Mac dots + filename */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a3e]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
        </div>
        <span className="ml-2 text-xs text-[#a1a1aa] font-mono">{varName}.js</span>
      </div>

      {/* Code block — styled like hero section */}
      <div className="px-5 py-5 font-mono text-xs leading-relaxed">

        <div className="code-line">
          <span className="code-keyword">const </span>
          <span className="code-var">{varName}</span>
          <span className="code-punct"> = {'{'}</span>
        </div>

        <div className="code-line pl-5">
          <span className="code-key">name</span>
          <span className="code-punct">: </span>
          <span className="code-string">&apos;{name}&apos;</span>
          <span className="code-punct">,</span>
        </div>

        <div className="code-line pl-5">
          <span className="code-key">description</span>
          <span className="code-punct">: </span>
          <span className="code-string">&apos;{description?.slice(0, 60)}{description?.length > 60 ? '...' : ''}&apos;</span>
          <span className="code-punct">,</span>
        </div>

        <div className="code-line pl-5">
          <span className="code-key">tech</span>
          <span className="code-punct">: </span>
          <span className="code-punct">[</span>
          {tags?.slice(0, 4).map((tag, i) => (
            <span key={i}>
              <span className="code-string">&apos;{tag}&apos;</span>
              {i < Math.min(tags.length, 4) - 1 && <span className="code-punct">, </span>}
            </span>
          ))}
          <span className="code-punct">],</span>
        </div>

        <div className="code-line pl-5">
          <span className="code-key">status</span>
          <span className="code-punct">: </span>
          <span className="code-bool">true</span>
          <span className="code-punct">, </span>
          <span className="code-comment">// live</span>
        </div>

        <div className="code-line">
          <span className="code-punct">{'};'}</span>
        </div>

        {/* Blinking cursor line */}
        <div className="code-line mt-1">
          <span className="code-comment">{'// '}</span>
          <span className="code-comment">view project</span>
          <span className="hero-cursor">|</span>
        </div>

      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 px-5 pb-5">
        {demo && (
          <Link href={demo} target="_blank"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full border border-[#1a1a3e] text-[#a1a1aa] hover:border-[#00e5ff] hover:text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all duration-300">
            <FaExternalLinkAlt size={10} />
            Live Demo
          </Link>
        )}
        {code && (
          <Link href={code} target="_blank"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#ff2d78] to-[#8b2cff] text-white hover:from-[#8b2cff] hover:to-[#00e5ff] transition-all duration-300">
            <FaCode size={10} />
            Source
          </Link>
        )}
      </div>

    </div>
  );
};

export default SingleProject;