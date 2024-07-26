import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
const drawerWidth = 240;
const navItems = ["Home", "Menu", "Branches", "About", "Contact"];

const Header = (props) => {
  const state = useSelector((state) => state.CartState);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Foodino
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item === "Home" ? "/" : `${item}`}
                key={item}
                style={{ textDecoration: "none", color: "#1e1e1e" }}
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar component="nav" sx={{ backgroundColor: "#ff5400" }}>
            <Toolbar sx={{ width: "100%" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginRight: "50px",
                }}
              >
                <Grid item md={2}>
                  <Typography
                    component="div"
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", sm: "block" },
                      fontSize: "1.6rem",
                      fontWeight: "600",
                    }}
                  >
                    Foodino
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={8}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item) => (
                      <Button
                        sx={{
                          textTransform: "none",
                          ":hover": {
                            color: "rgb(69, 68, 68)",
                            bgcolor: "#ffffff52",
                          },
                        }}
                      >
                        <Link
                          to={item === "Home" ? `/` : `/${item}`}
                          key={item}
                          style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "1rem",
                          }}
                        >
                          {item}
                        </Link>
                      </Button>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  md={2}
                  sx={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/ShopingCart"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <ShoppingCartSharpIcon />{" "}
                    <span
                      style={{
                        backgroundColor: "#ffffff6e",
                        padding: "4px",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {state.itemsCounter}
                    </span>
                  </Link>
                  <Link
                    to="/Favourites"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <FavoriteIcon />{" "}
                    <span
                      style={{
                        backgroundColor: "#ffffff6e",
                        padding: "4px",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {state.likedItems.length}
                    </span>
                  </Link>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
};

export default Header;

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
