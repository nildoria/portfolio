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
    <div className="min-h-screen w-full bg-bg section-pad">
      <div className="container-page">
        <Link href="/#blog"
          className="inline-flex items-center gap-2 text-xs text-mid transition-colors duration-150 hover:text-accent mb-8">
          <FaArrowLeft size={10} /> Back to Portfolio
        </Link>

        <div className="mb-12">
          <span className="block text-xs uppercase tracking-[0.12em] text-low">Writing</span>
          <h1 className="mt-4 text-[2rem] leading-[1.15] tracking-[-0.01em] text-hi">
            All articles
          </h1>
        </div>

        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-sm text-low">No articles available right now</p>
            <Link href="https://wpkiddie.com" target="_blank" rel="noopener noreferrer"
              className="text-xs text-accent hover:underline">
              Visit wpkiddie.com
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
