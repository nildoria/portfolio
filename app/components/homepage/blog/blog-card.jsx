// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt, FaClock } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <div className="project-card group relative rounded-xl border border-[#1a1a3e] overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{ background: 'linear-gradient(135deg, #0a0a18 0%, #0e0e1f 100%)' }}>

      {/* Top gradient border line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2d78] to-[#8b2cff]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#8b2cff] to-[#00e5ff]"></div>
      </div>

      {/* Cover image */}
      <div className="h-44 w-full overflow-hidden relative">
        <Image
          src={blog?.cover_image}
          height={400}
          width={700}
          alt={blog.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">

        {/* Meta row */}
        <div className="flex items-center justify-between text-[10px] font-mono">
          <span className="text-[#00f0ff]">{timeConverter(blog.published_at)}</span>
          <div className="flex items-center gap-3 text-[#a1a1aa]">
            <span className="flex items-center gap-1">
              <FaClock size={9} />
              {blog.reading_time_minutes} min
            </span>
            <span className="flex items-center gap-1">
              <BsHeartFill size={9} className="text-[#ff2d78]" />
              {blog.public_reactions_count}
            </span>
            {blog.comments_count > 0 && (
              <span className="flex items-center gap-1">
                <FaCommentAlt size={9} />
                {blog.comments_count}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <Link target='_blank' href={blog.url}>
          <h3 className="text-sm font-semibold text-white leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff2d78] hover:to-[#00e5ff] transition-all duration-300 cursor-pointer line-clamp-2">
            {blog.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-[#a1a1aa] leading-relaxed line-clamp-2">
          {blog.description}
        </p>

        {/* Read more */}
        <Link target='_blank' href={blog.url}
          className="mt-1 self-start text-[10px] font-semibold px-3 py-1 rounded-full border border-[#1a1a3e] text-[#00e5ff] hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-300">
          Read Article →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;