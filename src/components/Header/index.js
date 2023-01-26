import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Box } from "@mui/system";
import FlightIcon from "@mui/icons-material/Flight";
import BedIcon from "@mui/icons-material/Bed";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../Theme";
import { IconButton, Menu, MenuItem } from "@mui/material";

const pages = [
  {
    id: "find-flight",
    icon: <FlightIcon sx={{ rotate: "90deg", pt: "3px" }} />,
    title: "Find Flight",
    link: "flight",
  },
  {
    id: "find-stays",
    icon: <BedIcon sx={{ pr: "3px" }} />,
    title: "Find Stays",
    link: "stays",
  },
];

const mobileMenu = [
  {
    id: "find-flight-mobile",
    icon: <FlightIcon sx={{ rotate: "90deg", pt: "3px" }} />,
    title: "Find Flight",
    link: "flight",
  },
  {
    id: "find-stays-mobile",
    icon: <BedIcon sx={{ pr: "3px" }} />,
    title: "Find Stays",
    link: "stays",
  },
];

const Header = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container
      maxWidth={false}
      className={`header-container ${
        location.pathname === "/" ? "white-bg" : "transparent-bg"
      }`}
      sx={{
        [theme.breakpoints.down("bg")]: { padding: "16px 20px" },
        [theme.breakpoints.up("bg")]: { padding: "21px 54px" },
      }}
    >
      <Box
        className={`logo ${
          location.pathname === "/" ? "white-logo" : "black-logo"
        }`}
      />
      {/* Desktop/Tablet Menu */}
      <Box sx={{ display: { xs: "none", md: "flex" } }} className="nav-bar">
        <Box
          className="buttons-box"
          sx={{
            gap: { md: "12px", bg: "32px" },
            fontSize: { md: "16px", bg: "16px", lg: "22px" },
          }}
        >
          {pages.map((page) => (
            <Link
              key={page.id}
              to={page.link}
              className={`header-link ${
                location.pathname === "/"
                  ? "header-link-white"
                  : "header-link-black"
              }`}
            >
              {page.icon} {page.title}
            </Link>
          ))}
        </Box>
        <Box
          className="buttons-box"
          sx={{
            gap: { md: "16px", bg: "32px" },
            fontSize: { md: "16px", bg: "16px", lg: "22px" },
          }}
        >
          <Link
            to="login"
            className={`header-link ${
              location.pathname === "/"
                ? "header-link-white"
                : "header-link-black"
            }`}
          >
            Login
          </Link>
          <Link
            to="signup"
            className={`header-link signup ${
              location.pathname === "/" ? "signup-white" : "signup-black"
            }`}
          >
            Sign up
          </Link>
        </Box>
      </Box>

      {/* Mobile menu */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-bar"
          color="inherit"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon
            htmlColor={location.pathname === "/" ? "#FFF" : "#112211"}
          />
        </IconButton>
        <Menu
          id="menu-bar"
          sx={{
            display: { xs: "block", md: "none" },
          }}
          anchorEl={anchorElNav}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
              mt: 0.5,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 22,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {mobileMenu.map((page) => (
            <MenuItem key={page.id}>
              <Link to={page.link} className="header-link mobile">
                {page.icon} {page.title}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Container>
  );
};

export default Header;
