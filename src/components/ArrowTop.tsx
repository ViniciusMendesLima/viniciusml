import { useEffect, useState } from "react";
import styles from "./styles/ArrowTop.module.css";

const ArrowTop = () => {
  const [isVisible, SetIsVisible] = useState(false);

  const taggleVisibility = () => {
    if (window.pageYOffset > 100) {
      SetIsVisible(true);
    } else {
      SetIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", taggleVisibility);

    return () => window.removeEventListener("scroll", taggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.Arrow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export { ArrowTop };
