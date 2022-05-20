import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Navigate, useNavigate } from "react-router-dom";

const pages = ["Repositories", "Issues", "About"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    navigate("/signup");
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            Github Explorer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            Github Explorer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, color: "white" }}>
            {pages.map((page) => (
              <Button href={`/${page.toLowerCase()}`} key={page} onClick={handleCloseNavMenu} color='inherit' sx={{ my: 2, display: "block" }}>
                {page}
              </Button>
            ))}
            <button onClick={handleLogout}>Logout</button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
