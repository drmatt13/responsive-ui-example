import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ExamplePage = () => {
  const router = useRouter();

  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.href);
  }, [router, setLocation]);

  return (
    <div className="bg-black/[15%] dark:bg-black/50 h-screen dark:text-gray-200 rounded">
      <div className="flex">
        <div className="inline-block p-2 text-lg font-bold">Next.js page</div>
      </div>
      <div className="p-2">
        <div className="pr-4 md:inline-block">/pages/[route].tsx</div>
        <div className="pr-4 hidden md:inline-block">--{">"}</div>
        <div className="pt-4 md:pt-0 md:inline-block">{location}</div>
      </div>
      <div className="p-2 flex items-center text-gray-600">
        - created w/ next.js, tailwindcss, and typescript
      </div>
      <div className="pl-2 pb-2 flex items-center text-gray-600">
        - layout inspired by{" "}
        <a
          className="ml-1 text-blue-600 dark:text-sky-400 hover:text-purple-500 dark:hover:text-purple-500"
          href="https://tailwindcss.com/"
        >
          tailwindcss.com
        </a>
      </div>
      <div className="pl-2 pb-2 flex items-center text-gray-600">
        - created from scratch by{" "}
        <a
          className="ml-1 text-pink-600 dark:text-yellow-400 hover:text-purple-500 dark:hover:text-purple-500"
          href="https://portfolio-min.vercel.app"
        >
          Matthew
        </a>
      </div>
      <div className="pl-2 pb-2 flex items-center text-gray-600">
        - check out the repository for this{" "}
        <a
          className="ml-1 text-green-600 dark:text-green-500 hover:text-purple-500 dark:hover:text-purple-500"
          href="https://portfolio-min.vercel.app"
        >
          page
        </a>
      </div>
    </div>
  );
};

export default ExamplePage;
