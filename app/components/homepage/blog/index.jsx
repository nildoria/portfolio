import Link from "next/link";
import SectionHeader from "../../helper/section-header";
import BlogCard from "./blog-card";

function Blog({ blogs }) {
  if (!blogs?.length) return null;

  return (
    <section id="blog" className="bg-sunken section-pad">
      <div className="container-page">
        <SectionHeader index="05" label="Writing" title="Recent articles" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 6).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-sm text-accent transition-colors duration-150 hover:underline"
          >
            All articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
