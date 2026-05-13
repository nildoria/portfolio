// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {
  return (
    <div id='blog' className="relative z-50 border-t my-12 lg:my-24 border-[#1a1a3e] w-full">

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.06) 0%, transparent 70%)' }} />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">

        {/* Section heading */}
        <div className="flex flex-col items-center mb-12 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff2d78]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff2d78]">Writing</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff2d78]"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#8b2cff] to-[#00e5ff]">Articles</span>
          </h2>
          <p className="text-[#a1a1aa] text-sm lg:text-base max-w-xl text-center">
            Thoughts on WordPress development, web performance, and building better digital experiences.
          </p>
          <div className="mt-6 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#ff2d78] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
          {blogs.slice(0, 6).map((blog, i) => (
            <BlogCard blog={blog} key={blog?.id || i} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/blog"
            className="hero-btn-primary group relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              View All Articles
              <FaArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Blog;