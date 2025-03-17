import { useEffect, useState } from "react";
import { Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PhotoNav from "../PhotoNav";

const Navbar = () => {
  
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fitnessLetters = ["F", "I", "T", "N", "E", "S", "S"];
  const lifeLetters = ["L", "I", "F", "E"];
  
  return (
    <nav position="fixed">
      <Toolbar className="text-white flex justify-between bg-gradient-to-b from-violet-900 to-violet-400">
        {/* Contenedor para "Fitness Life" */}
        <div className=" flex flex-col mt-2 font-rocksalt font-[1000]">
          
          {/* Columna para "FITNESS" */}
          <div className="flex flex-col items-start mr-1 mb-12 ml-8">
            {fitnessLetters.map((letter, index) => (
              <span
                key={index}
                className={`text-white font-rocksalt ${
                  animate ? "animate-cascade" : ""
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Columna para "LIFE" */}
          <div className="flex flex-col ml-24 ">
            {lifeLetters.map((letter, index) => (
              <span
                key={index}
                sx={{ fontFamily: "rocksalt, sans-serif", fontSize: "26px" }}
                className={`text-white font-rocksalt ${
                  animate ? "animate-cascade" : ""
                }`}
                style={{ animationDelay: `${(fitnessLetters.length + index) * 0.3}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Componente PhotoNav */}
        <PhotoNav/>

        {/* Botones alineados verticalmente */}
        <div className="flex flex-col gap-16 mr-20">
        <Button
            color="inherit"
            component={Link}
            to="/entrenamiento"
            sx={{ fontFamily: "rocksalt, sans-serif", fontSize: "16px" }}
            className="text-white hover:bg-[#8B2E4D] normal-case"
          >
            Inicio
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/entrenamiento"
            sx={{ fontFamily: "rocksalt, sans-serif", fontSize: "16px" }}
            className="text-white hover:bg-[#8B2E4D] normal-case"
          >
            Entrenamiento
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/nutricion"
            sx={{ fontFamily: "rocksalt, sans-serif", fontSize: "16px" }}
            className="text-white hover:bg-[#8B2E4D] normal-case"
          >
            Nutrición
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contacto"
            sx={{ fontFamily: "rocksalt, sans-serif", fontSize: "16px" }}
            className="text-white hover:bg-[#8B2E4D] normal-case"
          >
            Contacto
          </Button>
        </div>
      </Toolbar>
    </nav>
  );
};

export default Navbar;