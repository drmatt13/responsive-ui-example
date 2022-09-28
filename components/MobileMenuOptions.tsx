import { useEffect, useRef } from "react";

// context
import { useGlobalContext } from "../context/globalContext";

interface Props {
  showMobileSideNav: boolean;
  setShowMobileSideNav: (value: boolean) => void;
}

const MobileMenuOptions = ({
  showMobileSideNav,
  setShowMobileSideNav,
}: Props) => {
  const { mobile, darkMode, toggleDarkMode } = useGlobalContext();
  const mobileSideNavRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "dark" && !darkMode) {
      toggleDarkMode();
    } else if (e.target.value === "light" && darkMode) {
      toggleDarkMode();
    }
  };

  useEffect(() => {
    if (showMobileSideNav) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      document.body.style.overflow = "hidden";
      mobileSideNavRef!.current!.style.overflowY = "scroll";
      containerRef!.current!.style.right = `${16}px`;
      if (!mobile) document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const scrollbarWidth =
        window.innerWidth - mobileSideNavRef!.current!.clientWidth;
      document.body.style.overflow = "unset";
      mobileSideNavRef!.current!.style.overflowY = "hidden";
      containerRef!.current!.style.right = `${scrollbarWidth + 16}px`;
      if (!mobile) document.body.style.paddingRight = "0";
    }
  }, [showMobileSideNav, mobile]);

  return (
    <div
      ref={mobileSideNavRef}
      className="z-20 fixed top-0 left-0 w-screen h-screen lg:hidden pointer-events-none"
    >
      <div
        className={`${
          showMobileSideNav
            ? "backdrop-blur-sm bg-black/20 dark:bg-black/10"
            : "hidden"
        } absolute top-0 left-0 h-full w-full pointer-events-auto`}
        onClick={() => setShowMobileSideNav(false)}
      />
      <div
        ref={containerRef}
        className={`${
          showMobileSideNav
            ? "linear duration-300 pointer-events-auto"
            : "-translate-y-[110%] ease-out duration-[400ms]"
        } shadow shadow-black/25 bg-white dark:bg-slate-800 absolute top-4 right-4 w-80 max-w-[88vw] transition-transform overflow-hidden rounded-lg`}
      >
        <div className="p-6 h-full">
          <div className="flex flex-col items-start">
            <div className="mb-5 dark:text-gray-400 hover:text-sky-400 dark:hover:text-white cursor-pointer">
              Portfolio
            </div>
            <div className="mb-5 dark:text-gray-400 hover:text-sky-400 dark:hover:text-white cursor-pointer">
              Github
            </div>
            <div className="mb-5 dark:text-gray-400 hover:text-sky-400 dark:hover:text-white cursor-pointer">
              Option one
            </div>
            <div className="mb-5 dark:text-gray-400 hover:text-sky-400 dark:hover:text-white cursor-pointer">
              Option two
            </div>
            <div className="mb-5 dark:text-gray-400 hover:text-sky-400 dark:hover:text-white cursor-pointer">
              Option three
            </div>
            <div className="mb-5 dark:text-gray-400 hover:text-sky-400 dark:hover:text-white cursor-pointer">
              Sign In
            </div>
          </div>
          <hr className="mb-5 border-black/10 dark:border-white/20" />
          <div className="flex justify-between items-center">
            <div className="text-gray-600 dark:text-gray-500">Switch theme</div>
            <select
              onChange={handleChange}
              className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 block p-2.5 dark:bg-gray-700 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              value={darkMode ? "dark" : "light"}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOptions;
