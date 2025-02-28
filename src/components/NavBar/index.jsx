/*import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" className="bg-blue-600">
      <Toolbar className="flex justify-between bg-[#aa315b]">
        <Typography variant="h6"  className="text-white no-underline">
          Fitness Life
        </Typography>
        <div>
          <Button color="inherit" >
            Entrenamiento
          </Button>
          <Button color="inherit" >
            Nutrición
          </Button>
          <Button color="inherit" >
            Contacto
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; */

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#6D213C' }}>
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-white no-underline">
          Fitness Life
        </Typography>
        <div>
          <Button 
            color="inherit" 
            component={Link} 
            to="/entrenamiento"
            sx={{ 
              color: 'white',
              '&:hover': { backgroundColor: '#8B2E4D' },
            }}
          >
            Entrenamiento
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/nutricion"
            sx={{ 
              color: 'white',
              '&:hover': { backgroundColor: '#8B2E4D' },
            }}
          >
            Nutrición
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contacto"
            sx={{ 
              color: 'white',
              '&:hover': { backgroundColor: '#8B2E4D' },
            }}
          >
            Contacto
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
