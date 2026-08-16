import { decodeEntities } from "@/utils/decode-entities";
import Image from "next/image";
import Link from "next/link";

const stripTags = (html) => String(html ?? "").replace(/<[^>]*>/g, "");

function BlogCard({ blog }) {
  const title = decodeEntities(stripTags(blog?.title?.rendered));
  const excerpt = decodeEntities(stripTags(blog?.excerpt?.rendered));
  const image =
    blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
  const date = blog?.date
    ? new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <Link
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-150 hover:border-line-strong"
    >
      {image ? (
        <Image
          src={image}
          alt={title}
          width={640}
          height={360}
          className="aspect-video w-full object-cover"
        />
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        {date ? <span className="text-xs text-low">{date}</span> : null}
        <h3 className="mt-2 line-clamp-2 text-xl leading-[1.3] text-hi">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-[1.6] text-mid">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
