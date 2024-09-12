import { useState, useEffect } from "react";

// Custom hook to determine if the screen is large
const useSmallScreen = (breakpoint = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth >= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmallScreen;
};

export default useSmallScreen;
