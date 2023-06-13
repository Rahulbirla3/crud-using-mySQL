import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useContext } from "react";
import RouterContext from "../router/RouterContext";
import { paths } from "../router/RouterReducer";
import { Badge, Icon } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { FETCH_WRAPPER } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { cardLength, cartProducts } from "../Redux/cartSlice";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [email, setEmail] = useState(localStorage.getItem("email"));

  //store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardLength());
  }, []);

  const { cardNumber } = useSelector((store) => store.carts);

  //End store

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const accesstype = localStorage?.getItem("accesstype");
  const token = localStorage?.getItem("token");
  const cartlength = localStorage?.getItem("cartlength");

  useEffect(() => {
    updateData(token, accesstype);
  }, []);

  const { state, updateData } = useContext(RouterContext);
  const { filterAllPath, filterCommonPath } = state;

  // console.log("66", filterCommonPath);

  const handleLogout = () => {
    localStorage.clear();
    let accesstype = localStorage?.getItem("accesstype");
    let token = localStorage?.getItem("token");
    updateData(token, accesstype);
    navigate(paths.Login);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* Not protected Routes */}
            {filterCommonPath?.map((path, index) =>
              // if dashbord not show navbar button because for dashboard we use logo
              {
                return (
                  path.navshow && (
                    <NavLink to={path.path} key={index} >
                      <Button
                        key={index}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {path.name}
                      </Button>
                    </NavLink>
                  )
                );
              }
            )}

            {/* Protected routes */}
            {filterAllPath?.map((val, index) => {
              return (
                val.navshow && (
                  <NavLink to={val.path}>
                    <Button
                      key={index}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {val.name}
                    </Button>
                  </NavLink>
                )
              );
            })}
          </Box>
          {token ? (
            <>
              <Box>
                <Button
                  onClick={handleLogout}
                  sx={{ mx: 0, color: "white", display: "block" }}
                >
                  Logout
                </Button>
              </Box>
              <Button sx={{ mx: 2 }} onClick={() => navigate(paths.Cart)}>
                <Badge badgeContent={cartlength} style={{ color: "white" }}>
                  <ShoppingCartCheckoutIcon style={{ color: "white" }} />
                </Badge>
              </Button>
            </>
          ) : (
            ""
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
