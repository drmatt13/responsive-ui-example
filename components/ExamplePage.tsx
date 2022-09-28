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
          className="ml-1 text-blue-500 dark:text-sky-400 hover:underline hover:text-purple-600 dark:hover:text-purple-500"
          href="https://tailwindcss.com/"
          rel="noreferrer"
          target="_blank"
        >
          tailwindcss.com
        </a>
      </div>
      <div className="pl-2 pb-2 flex items-center text-gray-600">
        - created from scratch by{" "}
        <a
          className="ml-1 text-pink-500 dark:text-yellow-400 hover:underline hover:text-purple-600 dark:hover:text-purple-500"
          href="https://portfolio-min.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          Matthew
        </a>
      </div>
      <div className="pl-2 pb-2 flex items-center text-gray-600">
        - check out the repository for this{" "}
        <a
          className="ml-1 text-green-500 dark:text-green-500 hover:underline hover:text-purple-600 dark:hover:text-purple-500"
          href="https://github.com/drmatt13/responsive-ui-example"
          rel="noreferrer"
          target="_blank"
        >
          page
        </a>
      </div>
      {/* <div className="pl-2 pb-2 flex items-center text-gray-600">
        - sdfsdpofksdf
      </div> */}
    </div>
  );
};

export default ExamplePage;
