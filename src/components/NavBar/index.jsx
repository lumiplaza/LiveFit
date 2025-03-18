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
        <div className=" flex flex-col mt-2 font-rocksalt text-3xl font-[1000]">
          
          {/* Columna para "FITNESS" */}
          <div className="flex flex-col  items-start mr-1 mb-12 ml-8">
            {fitnessLetters.map((letter, index) => (
              <span
                key={index}
                className={`text-white  font-rocksalt ${
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
          {[
            { to: "/entrenamiento", label: "Inicio" },
            { to: "/entrenamiento", label: "Entrenamiento" },
            { to: "/nutricion", label: "Nutrición" },
            { to: "/contacto", label: "Contacto" },
          ].map(({ to, label }, index) => (
          
          <Button
            key={index}
            color="inherit"
            component={Link}
            to={to}
            sx={{
            fontFamily: "rocksalt, sans-serif",
            fontSize: "16px",
            transition: "all 0.3s ease-in-out",
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
            padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#c1426c",
                color: "#fff",
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px rgba(139, 46, 77, 0.5)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                backgroundColor: "#fff",
                bottom: "0",
                left: "0",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
            className="text-white normal-case"
          >
            {label}
          </Button>
          ))}
        </div>
      </Toolbar>
    </nav>
  );
};

export default Navbar;