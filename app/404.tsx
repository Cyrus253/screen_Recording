// app/404.tsx or pages/404.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
