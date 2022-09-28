import { useEffect, useRef } from "react";

// context
import { useGlobalContext } from "../context/globalContext";

const SearchModal = () => {
  const { setShowSearch, mobile } = useGlobalContext();

  const masterContainerRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    masterContainerRef!.current!.style.overflowY = "scroll";
    searchContainerRef!.current!.style.right = `${16}px`;
    if (!mobile) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = "unset";
      if (!mobile) document.body.style.paddingRight = "0";
    };
  }, [mobile]);

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
          className="overflow-hidden flex justify-center mt-[10vh] min-h-[350px] h-1/2 max-h-[425px] w-[700px] max-w-[90vw] bg-white dark:bg-slate-800 z-10 rounded-lg shadow-sm shadow-black/50"
        >
          <input
            type="text"
            className="mt-6 h-10 w-[90%] border border-gray-400 dark:border-slate-700/80 dark:bg-black/25 px-2 rounded-lg focus:border-sky-400 dark:focus:border-sky-400"
            placeholder="Placeholder Search Component"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
