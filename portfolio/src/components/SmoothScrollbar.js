import { Scrollbar } from "smooth-scrollbar-react";
import SmoothScrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SmoothScrollbarElement = (props) => {
  const scrollbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollbarRef.current) {
      const scrollbar = scrollbarRef.current.scrollbar;
      if (scrollbar) {
        // Initialize smooth scrollbar
        SmoothScrollbar.init(scrollbar, {
          damping: 0.2,
          continuousScrolling: true,
          renderByPixels: true,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (scrollbarRef.current && location.key) {
      const scrollbar = scrollbarRef.current.scrollbar;
      if (scrollbar) {
        // Scroll to top when location changes
        scrollbar.setPosition(0, 0);
      }
    }
  }, [location.key]);

  return (
    <Scrollbar ref={scrollbarRef}>
      {props.children}
    </Scrollbar>
  );
};

export default SmoothScrollbarElement;