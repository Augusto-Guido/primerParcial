import { useState, useEffect } from "react";

function BtnScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="position-fixed bottom-0 end-0 m-4 btn btn-accent rounded-circle shadow-lg z-3 d-flex align-items-center justify-content-center"
      style={{ width: "48px", height: "48px", fontSize: "20px" }}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  );
}

export default BtnScrollTop;