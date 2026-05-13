// @flow strict
import BlogCard from '../components/homepage/blog/blog-card';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

async function getBlogs() {
  try {
    const res = await fetch(
      'https://wpkiddie.com/wp-json/wp/v2/posts?per_page=20&_embed=true',
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export const metadata = {
  title: 'All Articles — Sabbir Ahmed',
  description: 'WordPress development tips, web performance guides, and full-stack tutorials by Sabbir Ahmed.',
};

async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen w-full" style={{ background: '#07070f' }}>

      {/* Page header */}
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] pt-12 pb-8">
        <Link href="/#blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] hover:text-[#00e5ff] transition-colors duration-300 mb-8">
          <FaArrowLeft size={10} /> Back to Portfolio
        </Link>

        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff2d78]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff2d78]">Writing</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff2d78]"></span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#8b2cff] to-[#00e5ff]">Articles</span>
          </h1>
          <p className="text-[#a1a1aa] text-sm lg:text-base max-w-xl text-center">
            WordPress development tips, performance guides, and web tutorials.
          </p>
          <div className="mt-6 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#ff2d78] to-transparent"></div>
        </div>

        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-[#a1a1aa] font-mono text-sm">// No articles available right now</p>
            <Link href="https://wpkiddie.com" target="_blank"
              className="text-xs text-[#00e5ff] hover:underline font-mono">
              Visit wpkiddie.com →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
            {blogs.map((blog, i) => (
              <BlogCard blog={blog} key={blog.id || i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;