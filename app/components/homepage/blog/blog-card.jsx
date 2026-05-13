// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

function BlogCard({ blog }) {
  // WordPress REST API field mapping
  const title   = blog?.title?.rendered  || blog?.title  || 'Untitled';
  const excerpt = blog?.excerpt?.rendered|| blog?.description || '';
  const url     = blog?.link            || blog?.url     || '#';
  const date    = blog?.date            || blog?.published_at || '';

  // Featured image: from _embedded (WP REST) or direct cover_image (dev.to)
  const image =
    blog?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    blog?.cover_image ||
    null;

  // Strip HTML tags from excerpt
  const cleanExcerpt = excerpt.replace(/<[^>]+>/g, '').trim();

  // Format date
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';

  return (
    <div
      className="project-card group relative rounded-xl border border-[#1a1a3e] overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col"
      style={{ background: 'linear-gradient(135deg, #0a0a18 0%, #0e0e1f 100%)' }}
    >
      {/* Top gradient border line */}
      <div className="flex flex-row flex-shrink-0">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2d78] to-[#8b2cff]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#8b2cff] to-[#00e5ff]"></div>
      </div>

      {/* Cover image */}
      {image && (
        <div className="h-44 w-full overflow-hidden relative flex-shrink-0">
          <Image
            src={image}
            height={400}
            width={700}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18] via-transparent to-transparent"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">

        {/* Date */}
        {formattedDate && (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00f0ff]">
            <FaCalendarAlt size={9} />
            {formattedDate}
          </div>
        )}

        {/* Title */}
        <Link target="_blank" href={url}>
          <h3
            className="text-sm font-semibold text-white leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff2d78] hover:to-[#00e5ff] transition-all duration-300 cursor-pointer line-clamp-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>

        {/* Excerpt */}
        {cleanExcerpt && (
          <p className="text-xs text-[#a1a1aa] leading-relaxed line-clamp-3 flex-1">
            {cleanExcerpt}
          </p>
        )}

        {/* Read more */}
        <Link
          target="_blank"
          href={url}
          className="mt-auto self-start inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1 rounded-full border border-[#1a1a3e] text-[#00e5ff] hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-300"
        >
          Read Article <FaArrowRight size={8} />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;