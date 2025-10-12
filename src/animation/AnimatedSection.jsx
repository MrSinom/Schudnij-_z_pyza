import { useRef, useEffect, useState } from "react";
import styles from "./AnimatedSection.module.css";

function AnimatedSection({ children, direction = "right" }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animacja tylko raz
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible
    ? styles[`slideIn${direction}`]
    : styles.hidden;

  return (
    <div ref={ref} className={`${styles.section} ${animationClass}`}>
      {children}
    </div>
  );
}

export default AnimatedSection;
