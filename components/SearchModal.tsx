import { useEffect, useRef, useState } from "react";

// context
import { useGlobalContext } from "../context/globalContext";

const SearchModal = () => {
  const { showSearch, setShowSearch, mobile } = useGlobalContext();

  const masterContainerRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (showSearch) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      document.body.style.overflow = "hidden";
      masterContainerRef!.current!.style.overflowY = "scroll";
      searchContainerRef!.current!.style.right = `${16}px`;
      if (!mobile) document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (showSearch) inputRef.current?.focus();
    } else {
      const scrollbarWidth =
        window.innerWidth - masterContainerRef!.current!.clientWidth;
      document.body.style.overflow = "unset";
      masterContainerRef!.current!.style.overflowY = "hidden";
      searchContainerRef!.current!.style.right = `${scrollbarWidth + 16}px`;
      if (!mobile) document.body.style.paddingRight = "0";
      setSearch("");
    }
  }, [showSearch, mobile]);

  useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        setShowSearch(false);
      }
    });
    return () => {
      document.body.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          setShowSearch(false);
        }
      });
    };
  }, [setShowSearch]);

  return (
    <div
      ref={masterContainerRef}
      className={`z-50 fixed top-0 left-0 max-h-screen h-screen w-full pointer-events-none`}
    >
      <div className="flex justify-center z-50 sticky top-0 h-screen w-full overflow-hidden">
        <div
          className={`${
            showSearch
              ? "backdrop-blur-sm bg-black/20 dark:bg-black/10 pointer-events-auto"
              : ""
          } absolute h-full w-full`}
          onClick={() => setShowSearch(false)}
        />
        <div
          ref={searchContainerRef}
          className={`${
            showSearch
              ? "translate-y-0 linear duration-300 pointer-events-auto opacity-100"
              : "translate-y-[100%] linear duration-500 opacity-0"
          } transition-all flex flex-col overflow-hidden mt-[10vh] min-h-[350px] h-1/2 max-h-[425px] w-[700px] max-w-[90vw] bg-white dark:bg-slate-800 z-10 rounded-lg shadow-sm shadow-black/50`}
        >
          <div className="flex items-start py-1 border-b border-gray-300 dark:border-gray-600 dark:text-gray-400">
            <div className="w-12 h-12 flex justify-center items-center">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <input
              ref={inputRef}
              type="text"
              className="flex-1 p-3 bg-transparent dark:text-white"
              placeholder="Search Documention"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="w-12 h-12">
              <div className="flex h-full w-full justify-center items-center">
                <div
                  onClick={() => setShowSearch(false)}
                  className="cursor-pointer flex justify-center items-center bg-gray-500/20 hover:bg-gray-500/30 dark:bg-gray-500/50 dark:hover:bg-gray-400/50 px-1 mr-2 rounded text-gray-700 dark:text-white/60"
                >
                  esc
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center dark:text-gray-400">
            No recent searches
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
