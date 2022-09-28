import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// context
import { useGlobalContext } from "../context/globalContext";

interface Props {
  title: string;
  routes: string[];
}

const DocuementionSection = ({ title, routes }: Props) => {
  const { setShowMobileSideNav } = useGlobalContext();

  const router = useRouter();

  return (
    <div className="py-4 truncate">
      <div className="pb-6">{title}</div>
      <div className="translate-x-1 flex flex-col items-start border-l border-gray-200 dark:border-gray-600">
        {routes.map((route) => (
          <div
            key={route}
            className={`${
              router.asPath.split("/")[2] ===
                title.replace(/ /g, "-").toLowerCase() &&
              router.asPath.split("/")[3] ===
                route.replace(/ /g, "-").toLowerCase()
                ? "border-sky-400 text-sky-400"
                : "border-black/0 hover:border-gray-400 dark:hover:border-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
            } -translate-x-[.5px] border-l-[1px] cursor-pointer pl-3 mt-4 first-of-type:mt-0`}
            onClick={() => setShowMobileSideNav(false)}
          >
            <Link
              passHref
              href={`documention/${title
                .replace(/ /g, "-")
                .toLowerCase()}/${route.replace(/ /g, "-").toLowerCase()}`}
            >
              {route}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocuementionSection;
