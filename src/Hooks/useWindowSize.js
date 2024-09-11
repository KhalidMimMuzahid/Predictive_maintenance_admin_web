// src/hooks/useWindowSize.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreakpoint, setWidth } from "../features/breakpoints/breakpointsSlice";
import { getBreakpoint } from "../Utils/breakpoints";

const useWindowSize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      dispatch(setWidth(width));
      dispatch(setBreakpoint(getBreakpoint(width)));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);
};

export default useWindowSize;
