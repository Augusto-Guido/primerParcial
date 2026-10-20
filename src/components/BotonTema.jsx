import { useState, useEffect } from "react";

function BotonTema() {
  const [tema, setTema] = useState(localStorage.getItem("tema") || "dark");

  useEffect(() => {
    // Esto le dice a Bootstrap que cambie TODOS sus colores internos
    document.documentElement.setAttribute("data-bs-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  const toggleTema = () => {
    setTema(tema === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTema} className="btn btn-secondary rounded-circle">
      {tema === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default BotonTema;
