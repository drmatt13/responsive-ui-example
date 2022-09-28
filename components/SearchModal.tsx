import { useEffect, useRef, useState } from "react";

// context
import { useGlobalContext } from "../context/globalContext";

// interface

const SearchModal = () => {
  const { setShowSearch, mobile } = useGlobalContext();

  const masterContainerRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    masterContainerRef!.current!.style.overflowY = "scroll";
    searchContainerRef!.current!.style.right = `${16}px`;
    if (!mobile) document.body.style.paddingRight = `${scrollbarWidth}px`;
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = "unset";
      if (!mobile) document.body.style.paddingRight = "0";
    };
  }, [mobile]);

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
      className=" z-50 fixed top-0 left-0 h-screen w-screen"
    >
      <div className="flex justify-center z-50 sticky top-0 h-screen w-full backdrop-blur-sm bg-black/20 dark:bg-black/10">
        <div
          className="absolute h-full w-full"
          onClick={() => setShowSearch(false)}
        />
        <div
          ref={searchContainerRef}
          className="flex flex-col overflow-hidden mt-[10vh] min-h-[350px] h-1/2 max-h-[425px] w-[700px] max-w-[90vw] bg-white dark:bg-slate-800 z-10 rounded-lg shadow-sm shadow-black/50"
        >
          <div className="flex items-start py-1 border-b border-gray-600 dark:text-gray-400">
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
                  className="cursor-pointer flex justify-center items-center bg-gray-500/25 dark:bg-gray-500/50 px-1 rounded text-gray-700 dark:text-white/80"
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
