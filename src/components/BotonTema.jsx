import { useState, useEffect } from "react";

function BotonTema() {
  const [tema, setTema] = useState(localStorage.getItem("tema") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  const toggleTema = () => {
    setTema(tema === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTema}
      className="btn btn-outline-secondary d-flex align-items-center gap-2 px-3 rounded-pill"
      style={{ transition: "all 0.3s ease" }}
    >
      {tema === "dark" ? (
        <>
          <span className="fs-5">☼</span>
        </>
      ) : (
        <>
          <span className="fs-5">☾</span>
        </>
      )}
    </button>
  );
}

export default BotonTema;
