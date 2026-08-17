import Link from "next/link";

function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="container-page flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-hi">404</h1>
        <p className="mt-4 text-lg text-mid">Page Not Found</p>
        <p className="mt-2 text-mid">Sorry, the page you are looking for does not exist.</p>
        <Link
          className="mt-5 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-hover"
          href="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
