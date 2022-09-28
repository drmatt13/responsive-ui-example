import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// context
import globalContext from "../context/globalContext";

interface Props {
  icon: string;
  hoverColor: string;
  selectedColor: string;
  textColor: string;
  route: string;
}

const RouteItem = ({
  icon,
  textColor,
  selectedColor,
  hoverColor,
  route,
}: Props) => {
  const router = useRouter();

  const { darkMode, setShowMobileSideNav } = useContext(globalContext);

  return (
    <div className="flex mb-4 dark:text-gray-400">
      <Link
        href={
          route === "Home"
            ? "/"
            : route === "Documention"
            ? "/documention/getting-started/installation"
            : route.toLowerCase()
        }
        passHref
      >
        <div
          className="group flex cursor-pointer"
          onClick={() => setShowMobileSideNav(false)}
        >
          <div
            className={`${
              !darkMode
                ? (router.asPath === "/" && route === "Home") ||
                  router.asPath.split("/")[1] === route.toLocaleLowerCase()
                  ? "border-gray-400/90 shadow"
                  : "group-hover:border-gray-400/90 group-hover:shadow"
                : ""
            } overflow-hidden h-6 w-6 mr-4 rounded border dark:bg-slate-700/60 border-gray-300 dark:border-none`}
          >
            <i
              className={`${
                darkMode
                  ? (router.asPath === "/" && route === "Home") ||
                    router.asPath.split("/")[1] === route.toLocaleLowerCase()
                    ? `${selectedColor} text-white`
                    : `${hoverColor} text-gray-400 group-hover:text-white`
                  : textColor
              } ${icon} text-xs flex justify-center items-center h-full`}
            />
          </div>
          <div className="dark:hover:text-gray-200">
            <div
              className={`${
                (router.asPath === "/" && route === "Home") ||
                router.asPath.split("/")[1] === route.toLocaleLowerCase()
                  ? textColor
                  : ""
              }`}
            >
              {route}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RouteItem;
